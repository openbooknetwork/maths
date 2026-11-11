// This file finds where points, lines and circles cross in the plane of the figure, with y pointing up. A point is
// {x, y}, a line is { kind: 'line' | 'segment' | 'ray', p, q } and a circle is { kind: 'circle', c, r }. The build and
// the page share it.
export const EPS = 1e-6;
export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
export const same = (a, b) => dist(a, b) < EPS;
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y }), at = (p, d, t) => ({ x: p.x + d.x * t, y: p.y + d.y * t });
const dot = (a, b) => a.x * b.x + a.y * b.y, cross = (a, b) => a.x * b.y - a.y * b.x, len = d => Math.hypot(d.x, d.y);

// turn moves a about o by deg, anticlockwise
export function turn(o, a, deg) {
  const t = deg * Math.PI / 180, d = sub(a, o);
  return { x: o.x + d.x * Math.cos(t) - d.y * Math.sin(t), y: o.y + d.x * Math.sin(t) + d.y * Math.cos(t) };
}
export const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

// on says whether a point lies on an object, and it takes a segment or a ray as the whole line it lies on
export const on = (o, a) => o.kind === 'circle' ? Math.abs(dist(o.c, a) - o.r) < EPS : Math.abs(cross(sub(o.q, o.p), sub(a, o.p))) / len(sub(o.q, o.p)) < EPS;
// reach says whether the drawn part of a line reaches the point t of the way from p to q
const reach = (o, t) => o.kind === 'line' || (t > -EPS && (o.kind === 'ray' || t < 1 + EPS));

function lines(a, b) {
  const d = sub(a.q, a.p), e = sub(b.q, b.p), den = cross(d, e);
  if (Math.abs(den) < 1e-9 * len(d) * len(e)) return [];
  const w = sub(b.p, a.p), t = cross(w, e) / den, u = cross(w, d) / den;
  return reach(a, t) && reach(b, u) ? [at(a.p, d, t)] : [];
}
// a line meets a circle where it passes the foot of the perpendicular from the centre, by the same amount each way
function lineCircle(l, c) {
  const d = sub(l.q, l.p), t0 = dot(sub(c.c, l.p), d) / dot(d, d), foot = at(l.p, d, t0), h = dist(foot, c.c);
  if (h > c.r + EPS) return [];
  const s = Math.sqrt(Math.max(0, c.r * c.r - h * h)) / len(d);
  return (s * len(d) < EPS ? [t0] : [t0 - s, t0 + s]).filter(t => reach(l, t)).map(t => at(l.p, d, t));
}
function circles(a, b) {
  const d = dist(a.c, b.c);
  if (d < EPS || d > a.r + b.r + EPS || d < Math.abs(a.r - b.r) - EPS) return [];
  const u = { x: (b.c.x - a.c.x) / d, y: (b.c.y - a.c.y) / d }, k = (a.r * a.r - b.r * b.r + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, a.r * a.r - k * k)), base = at(a.c, u, k), n = { x: -u.y, y: u.x };
  return h < EPS ? [base] : [at(base, n, h), at(base, n, -h)];
}
export function meet(a, b) {
  if (a.kind === 'circle') return b.kind === 'circle' ? circles(a, b) : lineCircle(b, a);
  return b.kind === 'circle' ? lineCircle(a, b) : lines(a, b);
}

// alike says whether two objects of one kind are the same line or the same circle
export const alike = (a, b) => a.kind === b.kind && (a.kind === 'circle' ? same(a.c, b.c) && Math.abs(a.r - b.r) < EPS : on(b, a.p) && on(b, a.q));
