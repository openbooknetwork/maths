// The book's check of the English texts, run by kitap check after its own: the rules of agents/text.md that a pattern
// can state, over each text and each page's title. Each problem is <file>:<line> <rule>: <the words>.
// A problem fails the check:
//   page          a sentence speaks of the page or the screen, or says what "opens with"
//   punctuation   an em dash, a semicolon or a middle dot
// A note is printed for the reviewer to weigh, and the check still ends ok:
//   length        a text has more than 300 words, and plugins/checks/text.yaml does not list its page under long
//   screen        a sentence before the part about the figure reports what a readout shows or a line reads
//   control       the first paragraph, which teaches the idea, names a control. A challenge may, since it opens on
//                 what is asked.
//   repeat        two pages of the story share a sentence, with any numbers
//   sample        a sample sentence of agents/text.md is on two or more pages of the story
//   device        a sentence speaks of the reader's device, such as "on a phone" or the close-up box. A real
//                 situation about phones stays, so this is a note.
// The steps of a list are left out of repeat and sample: two pages with the same control give the same step.
import fs from 'fs';
import path from 'path';

const PAGE = /\b(the|this) (page|screen)\b(?! \d)|\bopens with\b/i;
const SCREEN = /\breadouts? (now )?(reads?|shows?)\b|\bline (now )?reads\b/i;
const PUNCTUATION = /[—;·]/;
const DEVICE = /\bon (a|your|the) (phone|tablet|laptop|computer|desktop|wide screen|small screen|narrow screen)\b|\b(wide|small|narrow) screen\b|\bclose-up box\b/i;
const CONTROL = /\b(press|tap|drag|click|readouts?|button|stepper|slider)\b|\bRoll\b/i;
// The part about the figure starts at the first paragraph that names it or has a list, and at the third at the latest.
const FIGURE = /\bfigure\b/i;
// A page whose story is about a book speaks of that book's pages.
const BOOK = ['number-line/a-bookmark-at-page-75'];
const BUDGET = 300; // The guide for a text's length, by "How long" in agents/text.md. Clarity comes first.
const MIN_WORDS = 6; // A shorter sentence, such as "Try it on the figure.", may stand on many pages.

// plain drops what a rule does not read: a live value's link, the marks round a number sentence and the list marker.
const plain = l => l.replace(/\[([^\]]*)\]\(@[^)]*\)/g, '$1').replace(/`([^`]*)`/g, '$1').replace(/^\s*([-*>]|\d+\.)\s+/, '');
const sentences = l => plain(l).split(/(?<=[.?!])["”]?\s+/).map(s => s.trim()).filter(Boolean);
// key makes two sentences equal where they differ in their numbers alone.
const key = s => s.toLowerCase().replace(/\d+/g, '#').replace(/[^a-z#]+/g, ' ').trim();
const long = s => key(s).split(' ').length >= MIN_WORDS;

// The samples are the quoted sentences and the quoted block of agents/text.md.
function samplesOf(root) {
  const rules = fs.readFileSync(path.join(root, 'agents', 'text.md'), 'utf8');
  const quoted = [...rules.matchAll(/"([^"]+)"/g)].flatMap(m => sentences(m[1].replace(/\s+/g, ' ')));
  const block = sentences(rules.split('\n').filter(l => l.startsWith('> ')).map(l => l.slice(2)).join(' '));
  return new Set([...quoted, ...block].filter(long).map(key));
}

export default function text({ root, story, pages, rel, loadYaml, note }) {
  const allowed = loadYaml(path.join(root, 'plugins', 'checks', 'text.yaml'))?.long ?? {};
  const samples = samplesOf(root), problems = [], seen = new Map(), sampled = new Map();
  for (const page of pages) {
    const file = path.join(page.dir, 'text', 'en.md');
    if (!fs.existsSync(file)) continue;
    const challenge = /^\s*challenge:/m.test(fs.readFileSync(path.join(page.dir, 'page.yaml'), 'utf8'));
    const at = n => `${rel(file)}:${n}`, add = m => { if (page.checked) problems.push(m); }, weigh = m => { if (page.checked) note(m); };
    // A title follows page and punctuation as a sentence does.
    const title = (fs.readFileSync(path.join(page.dir, 'page.yaml'), 'utf8').match(/^title:\s*"?(.*?)"?\s*$/m) ?? [])[1] ?? '';
    for (const [rule, re] of [['page', BOOK.includes(`${story}/${page.id}`) ? null : PAGE], ['punctuation', PUNCTUATION]]) {
      if (re && (re.test(title) || re.test(`${title}.`))) { add(`${rel(path.join(page.dir, 'page.yaml'))}:1 ${rule}: "${title}"`); break; }
    }
    let para = 0, figure = false;
    const words = fs.readFileSync(file, 'utf8').split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
    if (words > BUDGET && !allowed[`${story}/${page.id}`]) weigh(`${at(1)} length: ${words} words, the guide is ${BUDGET}`);
    fs.readFileSync(file, 'utf8').split('\n').forEach((raw, k) => {
      if (!raw.trim()) { para++; return; }
      const l = plain(raw), step = /^\s*[-*] /.test(raw);
      if (FIGURE.test(l) || step) figure = true;
      const say = (rule, re, tell = add) => { const m = l.match(re); if (m) tell(`${at(k + 1)} ${rule}: ${m[0]}`); };
      if (!BOOK.includes(`${story}/${page.id}`)) say('page', PAGE);
      say('punctuation', PUNCTUATION);
      if (!figure && para < 2) say('screen', SCREEN, weigh);
      if (para === 0 && !challenge) say('control', CONTROL, weigh);
      say('device', DEVICE, weigh);
      for (const s of step ? [] : sentences(raw).filter(long)) {
        const id = key(s), first = seen.get(id);
        if (first && first !== page.id) weigh(`${at(k + 1)} repeat: "${s}" also stands on ${first}`);
        else if (!first) seen.set(id, page.id);
        if (samples.has(id)) sampled.set(id, [...(sampled.get(id) ?? []), { page, line: `${at(k + 1)} sample: "${s}"` }]);
      }
    });
  }
  for (const hits of sampled.values()) if (hits.length > 1) for (const h of hits) if (h.page.checked) note(h.line);
  return problems;
}
