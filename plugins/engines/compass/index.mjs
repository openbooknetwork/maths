// This is the Node half of compass, the prototype engine for ruler and compass constructions. It checks the fields of
// page.yaml under the compass key against the goals, and it replays each goal's own construction from the points.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { schema } from '@openbooknetwork/kitap';
import { GOALS, anchors, solve, reached } from './goals.js';
import { build, refuse, TOOLS, KINDS } from './figure.js';
import { MEASURES, formatter, starts } from './format.js';

const { z, check } = schema;
const HERE = path.dirname(fileURLToPath(import.meta.url)), ROOT = path.resolve(HERE, '../../..');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const list = ids => ids.join(', ');

const Name = z.string().regex(/^[A-Z]$/, 'name a point with one capital letter');
const Spots = z.record(Name, z.tuple([z.number(), z.number()])); // it places each given point, with y pointing up
const Given = z.union(KINDS.map(k => z.object({ [k]: z.tuple([Name, Name]) }).strict()));
// A challenge names its goal like a page does. Hint stays off unless it names it, and others lists more places for the
// given points, which the Another one button steps through.
const Challenge = z.object({
  goal: z.string(),
  on: z.array(Name).default([]),
  others: z.array(Spots).default([]),
  hint: z.boolean().default(false),
}).strict();
export const PageCompass = z.object({
  points: Spots,
  given: z.array(Given).default([]), // it lists the segments, rays, lines and circles drawn from the start
  goal: z.string().optional(), // it names what the reader builds, a goal of goals.js
  on: z.array(Name).optional(), // it names the given points the goal builds on
  challenge: Challenge.optional(),
  readout: z.array(z.string()).default([]),
}).strict();

const moveSays = why => why === 'same' ? 'it draws what is there already' : 'it needs a point where two objects cross';
function readPage(fields, { at }, ctx) {
  const raw = check(PageCompass, fields, at), ch = raw.challenge;
  if (!raw.goal === !ch) ctx.fail(at, ch ? 'the page names a goal and a challenge, keep the challenge, which holds its goal' : 'name a goal, or a challenge with its goal');
  const pg = { points: raw.points, given: raw.given, goal: ch?.goal ?? raw.goal, on: ch?.on ?? raw.on ?? [], readout: raw.readout, challenge: ch ? { hint: ch.hint, others: ch.others } : null };
  const names = Object.keys(pg.points), goal = GOALS[pg.goal], key = ch ? 'challenge.' : '';
  for (const g of pg.given) { const [kind] = Object.keys(g), [a, b] = g[kind];
    for (const n of [a, b]) if (!names.includes(n)) ctx.fail(at, `given ${kind} names point ${n}, the points are ${list(names)}`);
    if (a === b) ctx.fail(at, `given ${kind} names ${a} twice, a ${kind} needs two points`);
  }
  if (!goal) ctx.fail(at, `${key}goal names "${pg.goal}", the goals are ${list(Object.keys(GOALS))}`);
  if (pg.on.length !== goal.takes.length) ctx.fail(at, `goal ${pg.goal} builds on ${goal.says}, write ${key}on: [${list(goal.takes)}] with the names of your points`);
  for (const n of pg.on) if (!names.includes(n)) ctx.fail(at, `${key}on names point ${n}, the points are ${list(names)}`);
  for (const id of pg.readout) if (!MEASURES.includes(id)) ctx.fail(at, `readout names "${id}", write ${list(MEASURES)}`);
  // Every place the points can take must leave the goal open at the start, and the goal's own construction must work
  // from it, or Hint would point at nothing.
  for (const [i, points] of [pg.points, ...(pg.challenge?.others ?? [])].entries()) {
    const where = i ? `challenge.others[${i - 1}]` : 'points', spec = { ...pg, points };
    if (i && Object.keys(points).sort().join() !== [...names].sort().join()) ctx.fail(at, `${where} places ${list(Object.keys(points))}, place the page's points ${list(names)}`);
    const odd = goal.test?.(anchors(spec), pg.on);
    if (odd) ctx.fail(at, i ? `${where}: ${odd}` : odd);
    if (reached(spec, build(spec, []))) ctx.fail(at, `with the points of ${where}, the figure meets the goal ${pg.goal} before the reader draws anything. Move the points or change the given objects`);
    const moves = [];
    for (const m of solve(spec)) {
      const why = refuse(build(spec, moves), m);
      if (why) ctx.fail(at, `the ${pg.goal} construction from ${where} stops at move ${moves.length + 1}, the ${m.tool}, as ${moveSays(why)}. Move the points apart`);
      moves.push(m);
    }
    if (!reached(spec, build(spec, moves))) ctx.fail(at, `the ${pg.goal} construction from ${where} ends without the goal, check the points under ${key}on`);
  }
  // a text links a count, a point, a tool or a given object (AB for the segment AB)
  const objects = pg.given.map(g => Object.values(g)[0].join(''));
  const linked = id => MEASURES.includes(id) || names.includes(id) || TOOLS.includes(id) || objects.includes(id);
  return {
    data: pg,
    links: { has: linked, attr: id => ` data-ref="${esc(id)}"`, names: () => [],
      missing: (name, id) => `[${name}](@${id}) links to "${id}", link ${list(MEASURES)}, a point (${list(names)}), a tool (${list(TOOLS)})${objects.length ? ` or a given object (${list(objects)})` : ''}` },
  };
}

// What a text types into its links is what the page shows before the reader touches it: no steps yet, the given
// objects, and the moves the goal needs.
const LINK = /\[([^\]]+)\]\(@([^)\s]+)\)/g;
function finish({ pages, texts }, ctx) {
  for (const pg of pages.filter(p => p.compass?.goal)) for (const [lang, text] of Object.entries(texts[pg.id] ?? {})) {
    const f = formatter(lang), n = starts(pg.compass);
    for (const [, name, id] of text.matchAll(LINK)) {
      const want = f.value(id, n);
      if (want !== null && name !== want) ctx.attempt(pg.id, () => ctx.fail(`${pg.id}/text/${lang}.md`, `[${name}](@${id}) differs from what the page shows at the start, write [${want}](@${id})`));
    }
  }
  return {};
}

const to = out => path.join(out, 'compass');
export default {
  id: 'compass',
  dir: ROOT, // the project's packages hold anime.js
  schemas: { page: PageCompass },
  ui: new URL('./i18n/', import.meta.url),
  client: { script: new URL('./client.js', import.meta.url), styles: new URL('./client.css', import.meta.url), module: true, libraries: [['animejs', 'dist/bundles/anime.umd.min.js']] },
  // the modules the client script imports go beside the libraries
  vendor(out) { for (const f of ['geometry.js', 'figure.js', 'goals.js', 'format.js', 'driver.js']) fs.cpSync(path.join(HERE, f), path.join(to(out), f)); },
  read: { page: readPage, finish },
  // the overview shows a page's figure built, the hexagon when the story has one
  bundle: ({ pages }) => {
    const read = pages.filter(p => p.compass?.goal), pg = read.findLast(p => p.compass.goal === 'hexagon') ?? read[read.length - 1];
    return { data: { overview: pg ? { ...pg.compass, overview: true } : null }, families: {}, credits: [] };
  },
};
