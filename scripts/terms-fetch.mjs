// Fetch the sources a language's terms are looked up in.
//   node scripts/terms-fetch.mjs <lang>
// Reads i18n/terms/<lang>.urls, one address per line with a name before it and what it is after a #:
//   meb-ilkokul-1-4  https://...pdf  # Turkey's primary maths programme, grades 1 to 4
// Writes .cache/terms/<lang>/<name>.pdf or .html and a <name>.txt beside it, which the terms file quotes from.
// A file that is already there is kept. Prints one line per address, ok or FAILED with the reason.
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const lang = process.argv[2];
const list = path.join('i18n', 'terms', `${lang}.urls`);
if (!lang || !fs.existsSync(list)) { console.error('usage: node scripts/terms-fetch.mjs <lang>, with i18n/terms/<lang>.urls'); process.exit(2); }
const out = path.join('.cache', 'terms', lang);
fs.mkdirSync(out, { recursive: true });

const text = html => html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
  .replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n');

let failed = 0;
for (const line of fs.readFileSync(list, 'utf8').split('\n')) {
  const [name, url] = line.split('#')[0].trim().split(/\s+/);
  if (!name || !url) continue;
  const txt = path.join(out, `${name}.txt`);
  if (fs.existsSync(txt) && fs.statSync(txt).size > 200) { console.log(`kept ${txt}`); continue; }
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (terms-fetch)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = Buffer.from(await res.arrayBuffer());
    const pdf = body.subarray(0, 5).toString() === '%PDF-';
    const raw = path.join(out, `${name}.${pdf ? 'pdf' : 'html'}`);
    fs.writeFileSync(raw, body);
    if (pdf) {
      const run = spawnSync('pdftotext', ['-layout', raw, txt]);
      if (run.status !== 0) throw new Error('pdftotext failed');
    } else fs.writeFileSync(txt, text(body.toString('utf8')));
    const size = fs.statSync(txt).size;
    if (size < 200) throw new Error(`the text holds ${size} characters, the page may need a browser`);
    console.log(`ok ${txt} (${size} characters)`);
  } catch (err) { failed++; console.log(`FAILED ${name} ${url}: ${err.message}`); }
}
process.exit(failed ? 1 : 0);
