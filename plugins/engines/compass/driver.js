// The driver moves the figure with anime.js. Times are in milliseconds, keyframes are arrays and lengths are pixels.
const { animate, createTimeline, stagger } = window.anime;
const live = new Set();
// anime.js keeps one callback per animation for then(), so each motion hands out a promise of its own
const run = a => { live.add(a); return a.then(() => { live.delete(a); }); };
const pt = (o, d, t) => ({ x: o.x + d.x * t, y: o.y + d.y * t });
const ends = (line, a, b) => { line.setAttribute('x1', a.x); line.setAttribute('y1', a.y); line.setAttribute('x2', b.x); line.setAttribute('y2', b.y); };
// dash draws a stroke from its start, as its dash covers the part drawn so far
const dash = (el, length, t) => { el.style.strokeDasharray = `${length} ${length}`; el.style.strokeDashoffset = length * (1 - t); };
const undash = el => { el.style.strokeDasharray = el.style.strokeDashoffset = ''; };

export default {
  // CSS transforms on SVG scale about the element's own middle
  adopt(root) { for (const el of root.querySelectorAll('.a')) { el.style.transformBox = 'fill-box'; el.style.transformOrigin = 'center'; } },
  stop() { for (const a of live) a.pause(); live.clear(); },

  // a ruled line grows from the first point both ways to the edges
  grow(line, from, a, b, ms = 420) {
    const da = { x: a.x - from.x, y: a.y - from.y }, db = { x: b.x - from.x, y: b.y - from.y }, s = { t: 0 };
    ends(line, from, from);
    return run(animate(s, { t: 1, duration: ms, ease: 'outCubic', onUpdate: () => ends(line, pt(from, da, s.t), pt(from, db, s.t)) }));
  },
  // a circle sweeps round from the point it passes through, as the pencil leg of a compass would
  sweep(circle, ms = 520) {
    const length = circle.getTotalLength(), s = { t: 0 };
    const draw = () => dash(circle, length, s.t);
    draw();
    return run(animate(s, { t: 1, duration: ms, ease: 'inOutSine', onUpdate: draw, onComplete: () => undash(circle) }));
  },
  // the result draws its sides one after another, its fill rises and its marks pop in
  cheer({ fill, strokes, marks, tick }) {
    for (const el of strokes) dash(el, el.getTotalLength(), 0);
    const tl = createTimeline();
    tl.add(strokes, { strokeDashoffset: 0, duration: 380, delay: stagger(110), ease: 'outQuad', onComplete: a => a.targets.forEach(undash) }, 0);
    if (fill) tl.add(fill, { opacity: [0, 0.42, 0.2], duration: 900, ease: 'outQuad' }, 150);
    if (marks.length) tl.add(marks, { scale: [0, 1], opacity: [0, 1], duration: 360, delay: stagger(50), ease: 'outBack' }, 300 + strokes.length * 110);
    if (tick) tl.add(tick, { scale: [0.4, 1.25, 1], duration: 520, ease: 'outBack' }, 200);
    return run(tl);
  },
  // a marked point pops up, and a ring spreads from it
  pop: el => run(animate(el, { scale: [0, 1.5, 1], duration: 420, ease: 'outQuad' })),
  ripple: ring => run(animate(ring, { scale: [1, 3], opacity: [0.8, 0], duration: 560, ease: 'outQuad' })),
  // the hint fades in, and what the reader cannot do shakes
  ghost: els => run(animate(els, { opacity: [0, 1], duration: 450, ease: 'outQuad' })),
  shake: el => run(animate(el, { x: [0, -7, 6, -4, 3, 0], duration: 380, ease: 'inOutSine' })),
  // an object drawn twice stands out once, and a readout jumps when its value changes
  blink: el => run(animate(el, { opacity: [1, 0.25, 1], duration: 500, ease: 'inOutSine' })),
  flash: chip => run(animate(chip, { scale: [1, 1.1, 1], duration: 320, ease: 'outQuad' })),
};
