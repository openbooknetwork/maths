// This file writes the counts that a text links and the readouts show, in a language. The browser writes the live
// values with it, and the build writes the starting values to check what a page's text types.
import { build } from './figure.js';
import { solve } from './goals.js';

// steps counts the reader's moves, objects the lines and circles in the figure, and fewest the moves the goal needs
export const MEASURES = ['steps', 'objects', 'fewest'];
export const counts = (spec, fig, moves) => ({ steps: moves.length, objects: fig.objs.length, fewest: solve(spec).length });
export const starts = spec => counts(spec, build(spec, []), []);

export function formatter(lang) {
  const fmt = n => new Intl.NumberFormat(lang).format(n);
  return { value: (id, n) => MEASURES.includes(id) ? fmt(n[id]) : null };
}
