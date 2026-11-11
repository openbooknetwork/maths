// What a page asks the reader to build. A goal takes the given points page.yaml names under on, solves the
// construction in the fewest moves this book knows, and checks a figure for the result, built in any order. A check
// returns what to light up when the result is there: a filled polygon, bold lines, equal sides, equal angles and
// right angles.
import { dist, same, turn, mid, on, meet } from './geometry.js';

const C = (a, b) => ({ tool: 'compass', a, b }), R = (a, b) => ({ tool: 'ruler', a, b }), P = a => ({ tool: 'point', a });
const sides = vs => vs.map((v, i) => [v, vs[(i + 1) % vs.length]]);
const polygon = vs => ({ fill: vs, segs: sides(vs), ticks: sides(vs), dots: vs });
const unit = (o, a) => { const d = dist(o, a); return { x: (a.x - o.x) / d, y: (a.y - o.y) / d }; };
const flat = (a, o, b) => Math.abs((a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x)) < 1e-6;
const plus = (a, b, c) => ({ x: a.x + b.x - c.x, y: a.y + b.y - c.y }); // it gives the fourth corner of a parallelogram
// centre finds the point as far from a, b and c with the formula of the circle through them
function centre(a, b, c) {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)), s = p => p.x * p.x + p.y * p.y;
  return { x: (s(a) * (b.y - c.y) + s(b) * (c.y - a.y) + s(c) * (a.y - b.y)) / d, y: (s(a) * (c.x - b.x) + s(b) * (a.x - c.x) + s(c) * (b.x - a.x)) / d };
}

export const GOALS = {
  // The reader draws a line and a circle and marks a point where they cross.
  'line-meets-circle': {
    takes: ['A', 'B'], says: 'two points',
    solve: ([a, b]) => [R(a, b), C(a, b), P(turn(a, b, 180))],
    check(_, f) {
      for (const x of f.points.filter(p => p.marked)) {
        const l = f.lines.find(o => on(o, x)), c = f.circles.find(o => on(o, x));
        if (l && c) return { lines: [l], circles: [c], dots: [x] };
      }
      return null;
    },
  },
  // In Euclid's first proposition the circles about each end through the other meet at the third corner.
  'equilateral-triangle': {
    takes: ['A', 'B'], says: 'the two ends of the segment',
    solve: ([a, b]) => { const c = turn(a, b, 60); return [C(a, b), C(b, a), R(a, c), R(b, c)]; },
    check([a, b], f) {
      for (const s of [60, -60]) { const c = turn(a, b, s); if (f.line(a, c) && f.line(b, c)) return polygon([a, b, c]); }
      return null;
    },
  },
  // the same two circles meet on the line that cuts the segment in half at a right angle
  midpoint: {
    takes: ['A', 'B'], says: 'the two ends of the segment',
    solve: ([a, b]) => [C(a, b), C(b, a), R(turn(a, b, 60), turn(a, b, -60)), P(mid(a, b))],
    check([a, b], f) {
      const m = mid(a, b), n = turn(m, b, -90), l = f.line(m, n);
      return l && f.marked(m) ? { lines: [l], dots: [m], ticks: [[a, m], [m, b]], right: [[m, b, n]] } : null;
    },
  },
  // a circle about the corner marks equal lengths on both arms, and the bisector runs through the corner and the
  // place the circles about those two marks meet
  'angle-bisector': {
    takes: ['A', 'O', 'B'], says: 'a point on one arm, the corner and a point on the other arm',
    test: ([a, o, b], [na, no, nb]) => flat(a, o, b) ? `${na}, ${no} and ${nb} lie on one line, move ${na} or ${nb} off it` : null,
    solve([a, o, b]) {
      const [near, far] = dist(o, a) <= dist(o, b) ? [a, b] : [b, a], u = unit(o, far), r = dist(o, near);
      const twin = { x: o.x + u.x * r, y: o.y + u.y * r }, x = [60, -60].map(s => turn(near, twin, s)).sort((p, q) => dist(o, q) - dist(o, p))[0];
      return [C(o, near), C(near, twin), C(twin, near), R(o, x)];
    },
    check([a, o, b], f) {
      const u = unit(o, a), v = unit(o, b), x = { x: o.x + u.x + v.x, y: o.y + u.y + v.y }, l = f.line(o, x);
      return l ? { lines: [l], arcs: [[o, a, x, ''], [o, x, b, '']], dots: [o] } : null;
    },
  },
  // a circle about P cuts the line at two points as far from P on each side, and P is their midpoint
  perpendicular: {
    takes: ['A', 'B', 'P'], says: 'two points of the line, then the point on it',
    test: ([a, b, p], [na, nb, np]) => on({ kind: 'line', p: a, q: b }, p) ? null : `${np} lies off the line ${na}${nb}, place it on the line`,
    solve([a, , p]) { const a2 = turn(p, a, 180); return [C(p, a), C(a, a2), C(a2, a), R(turn(a, a2, 60), turn(a, a2, -60))]; },
    check([, b, p], f) {
      const n = turn(p, b, -90), l = f.line(p, n);
      return l ? { lines: [l], right: [[p, b, n]], dots: [p] } : null;
    },
  },
  // The radius steps round the circle six times. The line through the centre and two circles give all six corners.
  hexagon: {
    takes: ['O', 'A'], says: 'the centre and a point on the circle',
    solve([o, a]) {
      const v = k => turn(o, a, 60 * k);
      return [R(o, a), C(a, o), C(v(3), o), ...[0, 1, 2, 3, 4, 5].map(k => R(v(k), v(k + 1)))];
    },
    check([o, a], f) {
      const ring = { kind: 'circle', c: o, r: dist(o, a) };
      for (const l of f.lines) for (const p of meet({ ...l, kind: 'line' }, ring)) {
        const vs = [0, 1, 2, 3, 4, 5].map(k => turn(o, p, 60 * k));
        if (vs.every((v, k) => f.line(v, vs[(k + 1) % 6]))) return polygon(vs);
      }
      return null;
    },
  },
  // By Thales, the line from B through the far end of a diameter stands at a right angle to AB.
  square: {
    takes: ['A', 'B'], says: 'the two ends of the segment',
    solve([a, b]) {
      const c = turn(a, b, 60), g = turn(b, a, -90), h = turn(a, b, 90);
      return [C(a, b), C(b, a), C(c, a), R(a, c), R(b, turn(c, a, 180)), C(g, b), R(a, h), R(h, g)];
    },
    check([a, b], f) {
      for (const s of [90, -90]) {
        const h = turn(a, b, s), g = turn(b, a, -s);
        if (f.line(b, g) && f.line(g, h) && f.line(h, a)) return { ...polygon([a, b, g, h]), right: [[a, b, h], [b, g, a], [g, h, b], [h, a, g]] };
      }
      return null;
    },
  },

  // The challenges follow. Thales gives the right angle at B as on the square page, and a ruler that carries AB on
  // past B lets the perpendicular page's method work there too.
  'right-angle': {
    takes: ['A', 'B'], says: 'the two ends of the segment, the right angle going at the second',
    solve([a, b]) { const c = turn(a, b, 60); return [C(a, b), C(b, a), C(c, a), R(a, c), R(b, turn(c, a, 180))]; },
    check([a, b], f) {
      const n = turn(b, a, 90), l = f.line(b, n);
      return l ? { lines: [l], right: [[b, a, n]], dots: [b] } : null;
    },
  },
  // An equilateral triangle on OA makes 60 degrees at O, and halving that angle leaves 30.
  'thirty-degrees': {
    takes: ['O', 'A'], says: 'the corner and a point on the arm',
    solve([o, a]) { const c = turn(o, a, 60); return [C(o, a), C(a, o), C(c, a), R(o, plus(a, c, o))]; },
    check([o, a], f) {
      for (const s of [30, -30]) { const x = turn(o, a, s), l = f.line(o, x); if (l) return { lines: [l], arcs: [[o, a, x, '30°']], dots: [o] }; }
      return null;
    },
  },
  // The centre lies as far from all three points, where the perpendicular bisectors of two sides cross.
  'circle-through-three': {
    takes: ['A', 'B', 'C'], says: 'the three points',
    test: ([a, b, c], names) => flat(a, b, c) ? `${names.join(', ')} lie on one line, and no circle passes through three points on a line. Move one off it` : null,
    solve([a, b, c]) {
      return [C(a, b), C(b, a), R(turn(a, b, 60), turn(a, b, -60)), C(b, c), C(c, b), R(turn(b, c, 60), turn(b, c, -60)), C(centre(a, b, c), a)];
    },
    check([a, b, c], f) {
      const k = f.circles.find(o => on(o, a) && on(o, b) && on(o, c));
      return k ? { circles: [k], thin: [[k.c, a], [k.c, b], [k.c, c]], ticks: [[k.c, a], [k.c, b], [k.c, c]], dots: [k.c] } : null;
    },
  },
};

// anchors lists the given points a goal builds on
export const anchors = spec => spec.on.map(n => ({ x: spec.points[n][0], y: spec.points[n][1] }));
export const solve = spec => GOALS[spec.goal].solve(anchors(spec));

// look answers what a check asks of a figure, such as whether a line passes through two points
export function look(fig) {
  const lines = fig.objs.filter(o => o.kind !== 'circle'), circles = fig.objs.filter(o => o.kind === 'circle');
  return { lines, circles, points: fig.points, line: (a, b) => lines.find(o => on(o, a) && on(o, b)), marked: a => fig.points.find(p => p.marked && same(p, a)) };
}
export const reached = (spec, fig) => GOALS[spec.goal].check(anchors(spec), look(fig));
