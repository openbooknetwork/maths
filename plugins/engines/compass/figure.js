// A construction holds the page's given points and objects and the reader's moves on top of them. A move is
// { tool: 'ruler' | 'compass' | 'point', a, b }. The ruler draws the line through a and b, the compass the circle with
// centre a through b, and the point tool marks a, where two objects cross, with the next free letter.
import { dist, same, meet, alike } from './geometry.js';

const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
export const TOOLS = ['ruler', 'compass', 'point'];
export const KINDS = ['segment', 'ray', 'line', 'circle'];

const spot = (spec, name) => ({ x: spec.points[name][0], y: spec.points[name][1] });
// object reads a given object, written in page.yaml as { segment: [A, B] }. It is a segment, a ray from A, a line or a
// circle about A.
export function object(spec, g) {
  const [kind] = Object.keys(g), [a, b] = g[kind].map(n => spot(spec, n)), id = g[kind].join('');
  return kind === 'circle' ? { kind, c: a, r: dist(a, b), through: b, given: true, id } : { kind, p: a, q: b, given: true, id };
}
export const ruled = m => m.tool === 'ruler' ? { kind: 'line', p: m.a, q: m.b } : { kind: 'circle', c: m.a, r: dist(m.a, m.b), through: m.b };

// build makes the figure after the moves, with its points, its objects and the crossings that no point marks yet
export function build(spec, moves) {
  const points = Object.keys(spec.points).map(name => ({ ...spot(spec, name), name, given: true }));
  const objs = spec.given.map(g => object(spec, g)), names = new Set(points.map(p => p.name));
  // a move through a crossing leaves a point there
  const use = a => points.find(p => same(p, a)) ?? points[points.push({ x: a.x, y: a.y }) - 1];
  for (const m of moves) {
    if (m.tool === 'point') { const p = use(m.a); p.name ??= LETTERS.find(l => !names.has(l)); p.marked = true; names.add(p.name); continue; }
    use(m.a); use(m.b); objs.push(ruled(m));
  }
  const crossings = [];
  for (let i = 0; i < objs.length; i++) for (let j = i + 1; j < objs.length; j++)
    for (const x of meet(objs[i], objs[j])) if (!points.some(p => same(p, x)) && !crossings.some(p => same(p, x))) crossings.push(x);
  return { points, objs, crossings };
}

// refuse says why a move cannot be made on a figure, or returns null. A move names points or crossings, and it adds
// a new object.
export function refuse(fig, m) {
  const there = a => fig.points.some(p => same(p, a)) || fig.crossings.some(p => same(p, a));
  if (!there(m.a) || (m.tool !== 'point' && !there(m.b))) return 'miss';
  if (m.tool === 'point') return fig.points.some(p => same(p, m.a) && (p.marked || p.given)) ? 'same' : null;
  if (same(m.a, m.b)) return 'miss';
  return fig.objs.some(o => alike(o, ruled(m))) ? 'same' : null;
}
