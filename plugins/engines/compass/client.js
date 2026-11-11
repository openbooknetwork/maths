// This is the browser half of compass. The reader builds an SVG figure with a ruler, a compass and a point tool, the
// tools and readouts dock under it, and the counts in the text follow the figure. The driver animates what happens.
import { dist, same, alike } from './vendor/compass/geometry.js';
import { build, refuse, ruled, TOOLS } from './vendor/compass/figure.js';
import { solve, reached, look } from './vendor/compass/goals.js';
import { counts, formatter } from './vendor/compass/format.js';
import driver from './vendor/compass/driver.js';

const ICONS = {
  ruler: '<path d="M3.5 16.5 16.5 3.5l4 4-13 13z"/><path d="m7.5 12.5 2 2m1-5 2 2m1-5 2 2"/>',
  compass: '<circle cx="12" cy="4.5" r="1.8"/><path d="M11 6.2 6 20m7-13.8L18 20"/><path d="M4.5 15.5a9.5 9.5 0 0 0 15 0"/>',
  point: '<path d="m5 5 14 14M19 5 5 19"/><circle cx="12" cy="12" r="2.6" fill="currentColor"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  hint: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6m-5 4h4"/>',
  another: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
};
const icon = id => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[id]}</svg>`;
const wait = ms => new Promise(r => setTimeout(r, ms));

window.KITAP_ENGINE = function compass(host) {
  const ENGINE = host.engine, NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs = {}, kids = []) => { const n = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); n.append(...kids); return n; };
  const html = (cls, tag = 'div') => { const n = document.createElement(tag); n.className = cls; return n; };
  const root = html('compass'); host.el.map.appendChild(root);
  const cover = html('compass-cover', 'img'); cover.alt = ''; cover.hidden = true;
  const head = html('compass-head'), stage = html('compass-stage'), panel = html('compass-panel');
  root.append(cover, head, stage, panel);
  head.innerHTML = `<span class="compass-tick" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m7.5 12.5 3 3 6-6.5"/></svg></span><div><p class="compass-goal"></p><p class="compass-say" aria-live="polite"></p></div>`;
  const svg = el('svg', { class: 'compass-svg' }), layer = () => el('g');
  const L = { fill: layer(), objs: layer(), res: layer(), ghost: layer(), cands: layer(), pts: layer(), live: layer(), fx: layer() };
  svg.append(...Object.values(L)); stage.appendChild(svg);
  host.el.legendButton.hidden = true; host.el.legend.hidden = true; host.el.view.hidden = true;

  // moves holds what the reader built, and plan holds the goal's own construction. first is the point a move starts
  // from, press is the pointer that is down, hover is the place the pointer would pick, and done is what lights up.
  let spec = null, moves = [], plan = [], fig = null, tool = 'ruler', first = null, press = null, hover = null, aim = null;
  let ghost = null, done = null, cheered = false, said = 0, box = null;
  let W = 0, H = 0, map = null, labels = new Map(), layouts = [], layout = 0;

  const T = id => host.T()[`compass_${id}`] ?? id;
  const F = () => formatter(host.lang());
  const moving = () => !host.reduced;
  // the peek card stands clear of the panel, however many rows it takes
  new ResizeObserver(() => document.documentElement.style.setProperty('--compass-panel', `${panel.offsetHeight}px`)).observe(panel);

  // y points up in the figure and down on the screen
  // the figure's box holds the given objects and the whole of the goal's construction, so every move stays in view
  function frame() {
    const xs = [], ys = [], add = (p, r = 0) => { xs.push(p.x - r, p.x + r); ys.push(p.y - r, p.y + r); };
    for (const p of build(spec, []).points) add(p);
    for (const o of [...build(spec, []).objs, ...plan.filter(m => m.tool !== 'point').map(ruled)]) o.kind === 'circle' ? add(o.c, o.r) : (add(o.p), add(o.q));
    for (const m of plan) add(m.a);
    return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
  }
  function fit() {
    const r = svg.getBoundingClientRect(); W = r.width; H = r.height;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const pad = Math.min(W, H) < 500 ? 24 : 32, s = Math.min((W - 2 * pad) / (box.x1 - box.x0), (H - 2 * pad) / (box.y1 - box.y0));
    const cx = (box.x0 + box.x1) / 2, cy = (box.y0 + box.y1) / 2;
    map = { s, to: p => ({ x: W / 2 + (p.x - cx) * s, y: H / 2 - (p.y - cy) * s }), back: q => ({ x: cx + (q.x - W / 2) / s, y: cy - (q.y - H / 2) / s }) };
  }
  const S = p => map.to(p);
  // span finds where a line, ray or segment enters and leaves the screen, as parameters along p→q
  function span(o) {
    const p = S(o.p), q = S(o.q), d = { x: q.x - p.x, y: q.y - p.y };
    let lo = o.kind === 'line' ? -Infinity : 0, hi = o.kind === 'segment' ? 1 : Infinity;
    if (o.kind !== 'segment') for (const [dv, pv, max] of [[d.x, p.x, W], [d.y, p.y, H]]) {
      if (Math.abs(dv) < 1e-9) continue;
      const a = (-4 - pv) / dv, b = (max + 4 - pv) / dv;
      lo = Math.max(lo, Math.min(a, b)); hi = Math.min(hi, Math.max(a, b));
    }
    return { p, d, lo, hi, at: t => ({ x: p.x + d.x * t, y: p.y + d.y * t }) };
  }
  function shape(o, cls) {
    if (o.kind === 'circle') { const c = S(o.c); return el('circle', { class: cls, cx: c.x, cy: c.y, r: o.r * map.s }); }
    const sp = span(o), a = sp.at(Math.max(sp.lo, -1e4)), b = sp.at(Math.min(sp.hi, 1e4));
    return el('line', { class: cls, x1: a.x, y1: a.y, x2: b.x, y2: b.y });
  }
  const inView = q => q.x > 6 && q.x < W - 6 && q.y > 6 && q.y < H - 6;

  // A point's letter goes where the figure leaves most room, of eight places around it. The objects of the goal's
  // construction count less than those drawn, and keep a letter clear of what the reader will draw.
  function placeLabel(p) {
    const q = S(p), gap = (o, c) => {
      if (o.kind === 'circle') return Math.abs(dist(S(o.c), c) - o.r * map.s);
      const sp = span(o), d2 = sp.d.x ** 2 + sp.d.y ** 2, t = Math.max(sp.lo, Math.min(sp.hi, ((c.x - sp.p.x) * sp.d.x + (c.y - sp.p.y) * sp.d.y) / d2));
      return dist(sp.at(t), c);
    };
    const later = plan.filter(m => m.tool !== 'point').map(ruled);
    const away = c => Math.min(24, ...fig.objs.map(o => gap(o, c)), ...later.map(o => gap(o, c) + 5), ...fig.points.filter(o => o !== p).map(o => dist(S(o), c) - 6));
    let best = null;
    for (let k = 0; k < 8; k++) {
      const t = -Math.PI / 4 - k * Math.PI / 4, c = { x: q.x + 20 * Math.cos(t), y: q.y + 20 * Math.sin(t) }, room = away(c) - k * 0.01;
      if (!best || room > best.room) best = { room, c };
    }
    return best.c;
  }

  const markable = () => [...fig.points.filter(p => !p.given && !p.marked), ...fig.crossings];
  const targets = () => tool === 'point' ? markable() : [...fig.points, ...fig.crossings];
  // snap picks the point or crossing nearest the pointer, within reach of a finger or of a mouse
  function snap(q, kind) {
    const reach = kind === 'mouse' ? 22 : 34;
    let best = null, d = reach;
    for (const p of targets()) { const s = S(p), e = dist(s, q); if (e < d && inView(s)) { d = e; best = p; } }
    return best;
  }

  // draw redraws the whole figure. The newest move draws itself in when fresh is set, and the result waits on hold.
  function draw(fresh = null, hold = false) {
    driver.stop();
    for (const g of Object.values(L)) g.replaceChildren();
    const objs = fig.objs.map((o, i) => { const n = shape(o, `obj ${o.given ? 'given' : 'mine'}`); if (o.id) n.dataset.id = o.id; n.dataset.i = i; return n; });
    L.objs.append(...objs);
    if (!spec.overview) L.cands.append(...fig.crossings.map(S).filter(inView).map(c => el('circle', { class: 'cand', cx: c.x, cy: c.y, r: 4.5 })));
    for (const p of fig.points) {
      const q = S(p), kind = p.given ? 'given' : p.marked ? 'marked' : 'used', dot = el('g', { class: 'a' }, [el('circle', { class: 'dot', cx: q.x, cy: q.y, r: kind === 'used' ? 3.5 : 5.5 })]);
      const g = el('g', { class: `pt ${kind}` }, [dot]);
      if (p.name) {
        const key = `${p.name} ${p.x.toFixed(5)} ${p.y.toFixed(5)}`;
        if (!labels.has(key)) labels.set(key, placeLabel(p));
        const at = labels.get(key), t = el('text', { class: 'name', x: at.x, y: at.y }); t.textContent = p.name; g.append(t); g.dataset.name = p.name;
      }
      L.pts.append(g); p.node = dot;
    }
    driver.adopt(svg);
    drawGhost(); if (!hold) drawResult(); live(); refresh();
    if (!fresh || !moving()) return Promise.resolve();
    if (fresh.tool === 'point') {
      const p = fig.points.find(o => same(o, fresh.a)), q = S(p), ring = el('circle', { class: 'ripple a', cx: q.x, cy: q.y, r: 9 });
      L.fx.append(ring); driver.adopt(L.fx); driver.ripple(ring).then(() => ring.remove());
      return driver.pop(p.node);
    }
    const n = objs[objs.length - 1], o = fig.objs[fig.objs.length - 1];
    if (o.kind === 'circle') {
      const c = S(o.c), t = S(o.through), start = Math.atan2(t.y - c.y, t.x - c.x);
      n.setAttribute('transform', `rotate(${start * 180 / Math.PI} ${c.x} ${c.y})`);
      return driver.sweep(n).then(() => n.removeAttribute('transform'));
    }
    const sp = span(o);
    if (sp.lo > sp.hi) return Promise.resolve();
    return driver.grow(n, sp.p, sp.at(sp.lo), sp.at(sp.hi));
  }

  // holds says whether the figure holds a move of the goal's construction, in whatever order the reader made it
  const holds = (m, f = look(fig)) => m.tool === 'ruler' ? !!f.line(m.a, m.b) : m.tool === 'compass' ? f.circles.some(o => alike(o, ruled(m))) : !!f.marked(m.a);
  // The hint draws the next move the figure lacks faintly and fills its first point.
  function drawGhost() {
    if (!ghost) return;
    const kids = ghost.tool === 'point' ? [] : [shape(ruled(ghost), 'ghost-obj')];
    for (const [i, p] of (ghost.tool === 'point' ? [ghost.a] : [ghost.a, ghost.b]).entries()) { const q = S(p); kids.push(el('circle', { class: `ghost-pt${i ? '' : ' from'}`, cx: q.x, cy: q.y, r: 11 })); }
    L.ghost.append(...kids);
  }

  // drawResult lights up the goal with a filled shape, bold sides, ticks on equal sides, arcs and right angles.
  function drawResult(cheer = false) {
    if (!done) return;
    const r = done, strokes = [], marks = [];
    const unit = (a, b) => { const d = dist(a, b); return { x: (b.x - a.x) / d, y: (b.y - a.y) / d }; };
    const fill = r.fill ? el('polygon', { class: 'res-fill', points: r.fill.map(S).map(q => `${q.x},${q.y}`).join(' ') }) : null;
    if (fill) L.fill.append(fill);
    for (const o of [...(r.lines ?? []), ...(r.circles ?? [])]) strokes.push(shape(o, 'res-line'));
    for (const [a, b] of r.segs ?? []) { const p = S(a), q = S(b); strokes.push(el('line', { class: 'res-line', x1: p.x, y1: p.y, x2: q.x, y2: q.y })); }
    for (const [a, b] of r.ticks ?? []) {
      const p = S(a), q = S(b), u = unit(p, q), m = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
      marks.push(el('line', { class: 'res-mark a', x1: m.x - u.y * 7, y1: m.y + u.x * 7, x2: m.x + u.y * 7, y2: m.y - u.x * 7 }));
    }
    for (const [o, a, b] of r.right ?? []) {
      const c = S(o), u = unit(c, S(a)), v = unit(c, S(b)), k = 16;
      marks.push(el('path', { class: 'res-mark a', d: `M${c.x + u.x * k} ${c.y + u.y * k}L${c.x + (u.x + v.x) * k} ${c.y + (u.y + v.y) * k}L${c.x + v.x * k} ${c.y + v.y * k}` }));
    }
    for (const [a, b] of r.thin ?? []) { const p = S(a), q = S(b); marks.push(el('line', { class: 'res-thin a', x1: p.x, y1: p.y, x2: q.x, y2: q.y })); }
    // An arc marks an angle. Equal angles carry a tick across the middle, and an angle of known size its degrees.
    for (const [o, a, b, say] of r.arcs ?? []) {
      const c = S(o), u = unit(c, S(a)), v = unit(c, S(b)), w = unit({ x: 0, y: 0 }, { x: u.x + v.x, y: u.y + v.y }), k = 36, sweep = u.x * v.y - u.y * v.x > 0 ? 1 : 0;
      marks.push(el('path', { class: 'res-mark a', d: `M${c.x + u.x * k} ${c.y + u.y * k}A${k} ${k} 0 0 ${sweep} ${c.x + v.x * k} ${c.y + v.y * k}` }));
      if (!say) { marks.push(el('line', { class: 'res-mark a', x1: c.x + w.x * (k - 6), y1: c.y + w.y * (k - 6), x2: c.x + w.x * (k + 6), y2: c.y + w.y * (k + 6) })); continue; }
      const t = el('text', { class: 'res-note a', x: c.x + w.x * (k + 22), y: c.y + w.y * (k + 22) }); t.textContent = say; marks.push(t);
    }
    for (const p of r.dots ?? []) { const q = S(p); marks.push(el('circle', { class: 'res-dot a', cx: q.x, cy: q.y, r: 6.5 })); }
    L.res.append(...strokes, ...marks); driver.adopt(L.res);
    if (cheer && moving()) return driver.cheer({ fill, strokes, marks, tick: head.querySelector('.compass-tick') });
  }

  // live draws what follows the pointer: the point a move starts from, the place it would pick and the line or circle.
  function live() {
    L.live.replaceChildren();
    if (!fig || spec.overview) return;
    if (first && tool !== 'point') {
      const to = hover ?? aim, f = S(first);
      if (to && !same(to, first)) L.live.append(shape(tool === 'ruler' ? { kind: 'line', p: first, q: to } : { kind: 'circle', c: first, r: dist(first, to) }, 'preview'));
      if (to && tool === 'compass') { const t = S(to); L.live.append(el('line', { class: 'arm', x1: f.x, y1: f.y, x2: t.x, y2: t.y })); }
      L.live.append(el('circle', { class: 'chosen', cx: f.x, cy: f.y, r: 12 }));
    }
    if (hover) { const h = S(hover); L.live.append(el('circle', { class: 'aim', cx: h.x, cy: h.y, r: 10 })); }
  }

  function say(key) {
    clearTimeout(said);
    const line = head.querySelector('.compass-say');
    const text = key ? T(`say_${key}`) : status();
    if (line.textContent !== text) line.textContent = text;
    if (key && ['miss', 'same', 'nothing'].includes(key)) { if (moving()) driver.shake(line); said = setTimeout(() => say(), 2600); }
  }
  // status writes the line under the goal when nothing else is said. It tells what the tool does next, or the result.
  function status() {
    if (done) return T(moves.length <= plan.length ? 'say_best' : 'say_done').replace('{n}', F().value('steps', { steps: moves.length }));
    if (ghost && !first) return T(`say_ghost_${ghost.tool}`);
    return T(`say_${tool}${first ? '_next' : ''}`);
  }
  function drawHead() {
    head.querySelector('.compass-goal').textContent = spec.on.reduce((s, n, i) => s.replaceAll(`{${i}}`, n), T(`goal_${spec.goal}`));
    say();
  }

  // refresh updates the readouts, the counts in the text and the state of the buttons.
  function refresh() {
    const f = F(), n = counts(spec, fig, moves);
    for (const chip of panel.querySelectorAll('.compass-chip')) {
      const b = chip.querySelector('b'), text = f.value(chip.dataset.ref, n);
      if (b.textContent === text) continue;
      if (b.textContent && moving()) driver.flash(chip);
      b.textContent = text;
    }
    for (const span of host.el.story.querySelectorAll('.place[data-ref]')) {
      const text = f.value(span.dataset.ref, n);
      if (text !== null) { span.textContent = text; span.dataset.live = ''; }
    }
    for (const b of panel.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', b.dataset.tool === tool);
    const act = id => panel.querySelector(`[data-act="${id}"]`);
    act('undo').disabled = act('reset').disabled = !moves.length;
    if (act('hint')) act('hint').disabled = !!done;
    head.classList.toggle('done', !!done);
  }

  // settle rebuilds the figure after a change of moves. The result lights up once the move that finished it has drawn
  // itself, or when that motion should have ended, as a redraw halts it.
  function settle(fresh) {
    const was = done;
    fig = build(spec, moves); done = reached(spec, fig);
    const won = !!done && !was, step = draw(fresh, won);
    if (won) {
      const cheer = !cheered;
      cheered = true;
      Promise.race([step, wait(800)]).then(() => { if (done && !L.res.childElementCount) drawResult(cheer); });
    }
    drawHead(); refresh();
    return step;
  }
  function act(m) {
    first = null; press = null;
    const why = refuse(fig, m);
    if (why) {
      const n = why === 'same' && m.tool !== 'point' && L.objs.querySelector(`[data-i="${fig.objs.findIndex(o => alike(o, ruled(m)))}"]`);
      if (n && moving()) driver.blink(n);
      live(); return say(why);
    }
    moves.push(m); ghost = null;
    settle(m);
  }
  function undo() {
    first = null; ghost = null;
    if (moves.length) { moves.pop(); settle(null); }
  }
  function restart() { moves = []; first = null; ghost = null; done = null; cheered = false; settle(null); }
  // Another one moves the given points to the next place the challenge lists, and the reader starts again there.
  function another() {
    layout = (layout + 1) % layouts.length;
    spec = { ...spec, points: layouts[layout] }; plan = solve(spec); box = frame(); labels = new Map(); fit();
    restart();
    if (moving()) driver.ghost([...L.objs.children, ...L.pts.children]);
  }
  function hint() {
    const next = plan.find(m => !holds(m));
    if (!next) return say('nothing');
    ghost = next; first = null; tool = next.tool;
    draw(); drawHead();
    if (moving()) driver.ghost([...L.ghost.children]);
  }

  // A ruler or compass move takes two taps, or one press dragged from the first point to the second. The point tool
  // takes one tap.
  const pointer = e => { const r = svg.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  svg.addEventListener('pointerdown', e => {
    if (e.button || !spec || spec.overview) return;
    e.preventDefault();
    try { svg.setPointerCapture(e.pointerId); } catch {} // a pointer a script made has nothing to capture
    const q = pointer(e), t = snap(q, e.pointerType);
    hover = t; aim = map.back(q);
    if (tool === 'point') { press = { from: q, t }; return live(); }
    if (!first) { if (!t) { live(); return say('miss'); } first = t; press = { from: q, fresh: true, moved: false }; }
    else press = { from: q, fresh: false, moved: false };
    say(); live();
  });
  svg.addEventListener('pointermove', e => {
    if (!spec || spec.overview) return;
    const q = pointer(e);
    if (press && e.pointerType === 'mouse' && !e.buttons) return end(e); // the button came up where the page could not see it
    hover = snap(q, e.pointerType); aim = map.back(q);
    if (press && dist(q, press.from) > 10) press.moved = true;
    live();
  });
  function end(e) {
    if (!press) return;
    const q = pointer(e), t = e.type === 'pointercancel' ? null : snap(q, e.pointerType), p = press;
    press = null;
    if (e.pointerType !== 'mouse') { hover = null; aim = null; }
    if (tool === 'point') { if (p.t && t && same(t, p.t)) act({ tool: 'point', a: t }); else { live(); if (!t) say('miss'); } return; }
    // A tap on the first point leaves it chosen. A drag, or a second tap, ends on the second point or lets go.
    if (p.fresh && !p.moved) return live();
    if (t && !same(t, first)) return act({ tool, a: first, b: t });
    first = null; live(); say();
  }
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) svg.addEventListener(type, end);
  svg.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !press) { hover = null; aim = null; live(); } });

  function drawPanel() {
    const button = (attr, id, cls = '') => `<button type="button" class="compass-btn ${cls}" ${attr}="${id}" title="${host.esc(T(id))}">${icon(id)}<span>${host.esc(T(id))}</span></button>`;
    // a challenge leaves out Hint unless it names it, and offers Another one when it has more places
    const ch = spec.challenge, acts = [!ch || ch.hint ? button('data-act', 'hint') : '', ch?.others.length ? button('data-act', 'another') : ''];
    panel.innerHTML = `<div class="compass-tools" role="group">${TOOLS.map(id => button('data-tool', id, 'tool')).join('')}${button('data-act', 'undo', 'bare')}</div>`
      + `<div class="compass-acts">${button('data-act', 'reset', 'bare')}${acts.join('')}</div>`
      + `<div class="compass-out">${spec.readout.map(id => `<output class="compass-chip" data-ref="${host.esc(id)}"><small>${host.esc(T(id))}</small><b></b></output>`).join('')}</div>`;
    for (const b of panel.querySelectorAll('[data-tool]')) b.addEventListener('click', () => { tool = b.dataset.tool; first = null; ghost = null; draw(); drawHead(); });
    const on = { undo, reset: restart, hint, another };
    for (const b of panel.querySelectorAll('[data-act]')) b.addEventListener('click', () => on[b.dataset.act]());
  }

  function show() {
    const overview = !!spec?.overview;
    cover.hidden = !!spec || !host.B.cover; stage.hidden = !spec; panel.hidden = head.hidden = !spec || overview;
    driver.stop(); press = hover = aim = first = ghost = done = null; cheered = false; labels = new Map();
    if (!spec) { if (host.B.cover) cover.src = host.B.cover; return; }
    layouts = [spec.points, ...(spec.challenge?.others ?? [])]; layout = 0;
    plan = solve(spec); moves = overview ? [...plan] : []; tool = 'ruler'; box = frame();
    fit(); fig = build(spec, moves); drawPanel();
    if (!overview) return settle(null);
    // the overview shows the last page's construction built, with its result lit up
    done = reached(spec, fig); draw();
  }
  // a new size draws the figure again at the new scale, letters and all
  new ResizeObserver(() => {
    if (!spec || stage.hidden) return;
    const r = svg.getBoundingClientRect();
    if (r.width === W && r.height === H) return;
    labels = new Map(); fit(); draw();
  }).observe(svg);

  return {
    show(page) { spec = page[ENGINE] ?? null; show(); },
    // a link in the text lights up its count, point, tool or given object
    point(id, on) {
      if (!spec) return;
      for (const n of root.querySelectorAll('.hot')) n.classList.remove('hot');
      if (!on) return;
      for (const n of [...panel.querySelectorAll(`[data-ref="${CSS.escape(id)}"],[data-tool="${CSS.escape(id)}"]`), ...svg.querySelectorAll(`[data-name="${CSS.escape(id)}"],[data-id="${CSS.escape(id)}"]`)]) n.classList.add('hot');
    },
    escape() { if (spec && !spec.overview) { first = null; ghost = null; draw(); say(); } },
    lang() { if (spec && !spec.overview) { drawPanel(); drawHead(); refresh(); } },
  };
};
dispatchEvent(new Event('kitap-engine'));
