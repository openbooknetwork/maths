// Prove a language's terms file against the glossary and against the sources it quotes.
//   node scripts/terms-check.mjs <lang>
// i18n/terms/<lang>.yaml holds one entry per term of agents/glossary.md:
//   "number sentence (calculations, comparisons)":
//     word: işlem
//     status: sourced            # sourced (two sources), single (one), memory (no source, a person checks), unsourced
//     sources:
//       - { file: meb-ilkokul-1-4, quote: "toplama işlemi yapar" }
// A term the language names in two ways holds them under cases: [{ for: a calculation, word, sources }, ...].
// The script fails where a glossary term has no entry, where a sourced or single entry has too few sources, where
// the word is missing from its own quote, and where a quote is not found in .cache/terms/<lang>/<file>.txt. It
// lists the entries marked memory and unsourced, which a translation waits on.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const yaml = createRequire(path.resolve('node_modules/@openbooknetwork/kitap/package.json'))('js-yaml');
const lang = process.argv[2];
const file = path.join('i18n', 'terms', `${lang}.yaml`);
if (!lang || !fs.existsSync(file)) { console.error('usage: node scripts/terms-check.mjs <lang>, with i18n/terms/<lang>.yaml'); process.exit(2); }

// The glossary's terms are the first cells of its table rows.
const glossary = fs.readFileSync(path.join('agents', 'glossary.md'), 'utf8').split('\n')
  .filter(l => l.startsWith('| ') && !l.startsWith('| Term') && !l.startsWith('|---')).map(l => l.split('|')[1].trim());
const terms = yaml.load(fs.readFileSync(file, 'utf8')) ?? {};
const squash = s => s.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase(lang);
const texts = {};
const source = name => texts[name] ??= (p => fs.existsSync(p) ? squash(fs.readFileSync(p, 'utf8')) : null)(path.join('.cache', 'terms', lang, `${name}.txt`));

const problems = [], waiting = [];
const NEED = { sourced: 2, single: 1 };
for (const term of glossary) {
  const e = terms[term];
  if (!e) { problems.push(`${term}: no entry, add it to ${file}`); continue; }
  if (!['sourced', 'single', 'agreed', 'memory', 'unsourced'].includes(e.status)) { problems.push(`${term}: status is ${JSON.stringify(e.status ?? null)}, write sourced, single, agreed, memory or unsourced`); continue; }
  if (e.status === 'unsourced') { waiting.push(`${term}: unsourced`); continue; }
  // A term with two words in the language lists them under cases, each with what it serves and its own sources.
  if (e.cases) { for (const c of e.cases) check(`${term}, ${c.for ?? 'a case'}`, { ...c, status: c.status ?? e.status }); continue; }
  check(term, e);
}
function check(term, e) {
  if (e.status === 'unsourced') { waiting.push(`${term}: unsourced`); return; }
  if (!e.word) { problems.push(`${term}: no word, write the word or mark the entry unsourced`); return; }
  if (e.status === 'memory') { waiting.push(`${term}: "${e.word}" is from memory`); return; }
  // agreed: a person who reads the language chose the word, named under by, where no source has one.
  if (e.status === 'agreed') { if (!e.by) problems.push(`${term}: agreed needs by, the person who chose "${e.word}"`); return; }
  const sources = e.sources ?? [];
  if (sources.length < NEED[e.status]) problems.push(`${term}: ${e.status} needs ${NEED[e.status]} source${NEED[e.status] > 1 ? 's' : ''} and has ${sources.length}`);
  if (e.status === 'sourced' && new Set(sources.map(s => s.file)).size < 2) problems.push(`${term}: its two sources are one file, quote a second file or mark it single`);
  // The word may be inflected in its quote, so each form the entry lists counts: word, and forms: [..].
  const forms = [e.word, ...(e.forms ?? [])].map(squash);
  for (const s of sources) {
    const text = source(s.file);
    if (text === null) { problems.push(`${term}: .cache/terms/${lang}/${s.file}.txt is missing, run node scripts/terms-fetch.mjs ${lang}`); continue; }
    if (!text.includes(squash(s.quote ?? ''))) problems.push(`${term}: the quote "${s.quote}" is not in ${s.file}.txt, copy it from the file`);
    if (!forms.some(f => squash(s.quote ?? '').includes(f))) problems.push(`${term}: the quote "${s.quote}" holds no form of "${e.word}", quote a sentence that has the word or list the form under forms`);
  }
}
for (const term of Object.keys(terms)) if (!glossary.includes(term)) problems.push(`${term}: not a term of agents/glossary.md, write it as the glossary does`);

for (const w of waiting) console.log(`waiting  ${w}`);
for (const p of problems) console.log(`problem  ${p}`);
console.log(problems.length ? `${problems.length} problem${problems.length > 1 ? 's' : ''}` : waiting.length ? `ok, with ${waiting.length} term${waiting.length > 1 ? 's' : ''} waiting on a person` : 'ok');
process.exit(problems.length ? 1 : 0);
