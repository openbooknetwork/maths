// Make a story's covers from one of its own figures: one for a light screen and one for a dark screen.
//   node scripts/cover.mjs <story>
// story.yaml names the page whose figure is the cover and the caption of the image, under the engine's key:
//   hesap:
//     cover: { page: a-whole-and-two-parts, caption: "A whole of 7 split into parts of 3 and 4." }
// The script builds the story, opens that page with the text and the controls hidden, captures the figure at the
// size of a link preview in both colour schemes, adds the two as images of the story with kitap image, and writes
// their ids as cover: and cover_dark: in story.yaml. The light one is the link preview. Run it again after the
// figure changes.
import { spawn, spawnSync } from 'child_process';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { createRequire } from 'module';

const yaml = createRequire(path.resolve('node_modules/@openbooknetwork/kitap/package.json'))('js-yaml');
const story = process.argv[2];
const storyFile = path.join('content', story ?? '', 'story.yaml');
if (!story || !fs.existsSync(storyFile)) { console.error('usage: node scripts/cover.mjs <story>'); process.exit(2); }
const meta = yaml.load(fs.readFileSync(storyFile, 'utf8')), want = meta.hesap?.cover;
if (!want?.page || !want?.caption) { console.error(`${storyFile}: add hesap: { cover: { page: <page id>, caption: <what the figure shows> } }`); process.exit(2); }

// A link preview is 1200 by 630, and the capture holds twice as many pixels for a sharp card on the main page.
const W = 1200, H = 630, SCALE = 2;
const work = path.join('.cache', 'cover'), site = path.join(work, 'site'), SCHEMES = ['light', 'dark'], shot = scheme => path.join(work, `${story}-${scheme}.png`);
const built = spawnSync('./node_modules/.bin/kitap', ['build', '--story', story, '--local-assets', '--out', site], { encoding: 'utf8' });
if (built.status !== 0) { console.error(built.stdout + built.stderr); process.exit(1); }

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  let file = path.join(site, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' }); fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/${meta.id}/`;

const port = 9800 + Math.floor(Math.random() * 150), profile = `/tmp/cover-profile-${port}`;
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, `--window-size=${W},${H}`, '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let problem = null;
try {
  let target;
  for (let i = 0; i < 50 && !target; i++) { await sleep(200); try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page'); } catch {} }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let seq = 0; const pending = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise(r => { const id = ++seq; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
  const evaluate = async expression => (await send('Runtime.evaluate', { expression, returnByValue: true })).result?.result?.value;
  await send('Page.enable'); await send('Page.bringToFront'); await send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: SCALE, mobile: false });
  // the cover is a still, so it is taken with motion off
  const media = scheme => send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: scheme }, { name: 'prefers-reduced-motion', value: 'reduce' }] });
  await media(SCHEMES[0]);
  await send('Page.navigate', { url: base }); await sleep(2500);
  const found = await evaluate(`(i => { if (i >= 0) go(i); return i >= 0; })(PAGES.findIndex(p => p.id === ${JSON.stringify(want.page)}))`);
  if (!found) throw new Error(`${storyFile}: hesap.cover.page is "${want.page}", the pages are ${await evaluate('PAGES.map(p => p.id).join(", ")')}`);
  await sleep(1500);
  // the figure alone fills the window: the text, the contents, the panel, the readouts and the peek card are hidden
  await evaluate(`(() => { const s = document.createElement('style'); s.textContent = 'body *{visibility:hidden!important}#map,#map *{visibility:visible!important}#map{position:fixed!important;inset:0!important;z-index:99999!important;width:auto!important;height:auto!important;border:0!important}.hesap-panel,.hesap-head,#peek{display:none!important}.hesap-stage{margin:28px}'; document.head.appendChild(s); })()`);
  for (const scheme of SCHEMES) {
    await media(scheme); await sleep(1500);
    const png = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(shot(scheme), Buffer.from(png.result.data, 'base64'));
  }
} catch (err) { problem = err; } finally { chrome.kill(); server.close(); fs.rmSync(profile, { recursive: true, force: true }); }
if (problem) { console.error(problem.message); process.exit(1); }

// the last covers of the story give way to the new ones
const images = path.join('content', story, 'shared', 'images');
for (const old of fs.existsSync(images) ? fs.readdirSync(images).filter(d => d.startsWith(`${story}-cover-`)) : []) fs.rmSync(path.join(images, old), { recursive: true });
let text = fs.readFileSync(storyFile, 'utf8');
for (const [scheme, key] of [['light', 'cover'], ['dark', 'cover_dark']]) {
  const name = `${story}-cover-${scheme}`;
  const added = spawnSync('./node_modules/.bin/kitap', ['image', shot(scheme), name, '--caption', want.caption, '--credit', 'Open Maths Book', '--story', story], { encoding: 'utf8' });
  if (added.status !== 0) { console.error(added.stdout + added.stderr); process.exit(1); }
  const id = fs.readdirSync(images).find(d => d.startsWith(`${name}-`)), line = new RegExp(`^${key}:.*$`, 'm');
  text = line.test(text) ? text.replace(line, `${key}: ${id}`) : text.replace(/^(title:.*\n)/m, `$1${key}: ${id}\n`);
  console.log(`${story}: ${key} ${id} from page ${want.page}`);
}
fs.writeFileSync(storyFile, text);
