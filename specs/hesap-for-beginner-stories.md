# What hesap needs for the beginner stories

The 60 plans in `specs/stories/` name the figure each story uses. This file collects the scenes and engine features
that hesap lacks today, so the engine work can be planned before any story is built. Each plan's "Engine" line
holds the detail of what its scene must do.

## Features every beginner story needs

- **Challenges that are drawn.** A goal names a function that draws its target, next to the function that tests
  it. The page declares the ranges and conditions, the engine draws when the page opens and again on "Another
  one", and the figure starts afresh. Today every hesap challenge lists fixed `targets` in the page file.
- **A drawn value in the page title.** Some challenge titles carry the drawn number, such as "Draw a line 7 cm
  long", so the engine writes the drawn value into the title and the contents list.
- **A check for drawn challenges.** `kitap check` runs each goal's draw function many times and fails a page
  where a draw is unreachable or already solved.
- **Coins and notes per language.** The money story uses each language's own coins, such as kuruş and lira in
  Turkish, and its challenges draw from them.

## New families

| Family | Scenes | Stories that use it |
|---|---|---|
| `counters` | `count` (objects to count, a tray, a closed box to count on from), `match` (two rows paired, a sign tile), `frames` (ten frames in two colours, part and whole), `groups` (plates of counters), `array` (rows and columns that grow, turn and split), `share` (dealing into plates or packing into bags, leftovers), `runs` (runs of blocks to swap and regroup), `copies` (a bar made of copies of a smaller bar), `pattern` (repeating units, growing figures, pairs for odd and even), `bar` (part and whole bars with a box on any piece) | `counting`, `more-and-less`, `number-bonds`, `adding-within-20`, `fact-families`, `equal-groups`, `times-tables`, `any-order`, `times-as-many`, `sharing-and-grouping`, `remainders`, `number-patterns`, `missing-number`, `word-problems` |
| `place` | `blocks` (base ten blocks that bundle and break), `wheels` (digit wheels in groups of three, the name in words), `shift` (digit cards sliding along a place chart), `columns` (a written column sum with its blocks), `multiply` (an array split at the tens beside the written layout), `divide` (sharing blocks beside short and long division) | `tens-and-ones`, `hundreds-and-thousands`, `large-numbers`, `adding-tens-and-ones`, `column-methods`, `ten-times-the-place`, `long-multiplication`, `written-division`, `rounding-and-estimating` |
| `line` | a number line for whole numbers from 0 with hops, label cards, a bracket to the nearest round number, and jumps of a set size | `number-line`, `skip-counting`, `adding-within-20`, `fact-families`, `adding-tens-and-ones`, `missing-number`, `rounding-and-estimating` |
| `clock` | `clock` (geared hands, a snap step, digital display and words), `interval` (two times, a shaded sweep, a time line split at the hour), `stopwatch` | `telling-the-time`, `time-intervals`, `converting-units` |
| `coins` | `tray` (coins and notes, swapping a set for one coin, a total), `change` (a price and a payment, counting on) | `money`, `tenths-and-hundredths` |
| `chart` | `sort` (objects dragged into trays), `tally`, `table`, `pictogram`, `bars`, `pie` (equal slices in several colours) | `sorting-and-pictograms`, `bar-charts`, `pie-charts` |
| `measure` | `line-up` (lengths compared from a start line, units laid end to end), `ruler`, `scale` (a pan balance and a dial), `jugs`, `two-scales` (one bar read in two units) | `comparing-lengths`, `centimetres-and-metres`, `mass`, `capacity`, `converting-units` |
| `position` | shelves, a row and a queue where objects are placed above, below, left, right, between, in front and behind | `position-words` |
| `dial` | an arrow that turns by quarter and eighth turns, a right angle checker that fits onto corners | `turns-and-right-angles` |
| `expression` | a line of number and sign tiles that merge when a sign is tapped, with brackets the reader drags | `order-of-operations` |

## New scenes in families that exist

| Family | Scene or change | Stories that use it |
|---|---|---|
| `geo` | `shape` (a polygon of 3 to 8 corners, add and remove a corner, turn it, read its name) | `flat-shapes`, `quadrilaterals-and-polygons` |
| `geo` | `tiles` (a grid of unit squares to tap or drag, the outline, the count, the edges round the outside) and pieces that snap into an outline | `flat-shapes`, `perimeter`, `area-by-counting-squares`, `area-of-rectangles` |
| `geo` | `l-shape` (a shape made of two rectangles with a cut line to drag) | `area-of-rectangles` |
| `geo` | `lines` (segments, rays and lines on a dot board, tested for parallel and perpendicular) | `lines-parallel-perpendicular` |
| `geo` | `angle` and `rays` with a protractor that has two scales | `angles`, `angles-add-up`, `triangles`, `quadrilaterals-and-polygons` |
| `geo` | `triangle` and `quadrilateral` gain every name that fits, ticks on equal sides, arrows on parallel sides, a sorting table and a family diagram | `triangles`, `quadrilaterals-and-polygons` |
| `axes` | the solids gain taps that mark and count faces, edges and corners, and a board that tilts to show rolling and sliding | `solid-shapes` |
| `parts` | `line` (a fraction line of one to three wholes, a fraction wall), `decimal` (hundred grids with place value columns), `cut` (cut lines to drag on a shape), `share` (counters onto two or four plates) | `halves-and-quarters`, `fractions-on-a-line`, `equivalent-fractions`, `mixed-numbers`, `tenths-and-hundredths`, `comparing-decimals` |
| `parts` | `add` keeps one denominator, `compare` marks one half, `shade` reads the unshaded rest, `mixed` works back to a fraction | `adding-like-fractions`, `comparing-fractions`, `unit-fractions`, `mixed-numbers` |
| `grid` | `times` (the times square that lights a row, a column and its array), `month` (a calendar page that follows the real calendar) | `times-tables`, `any-order`, `sharing-and-grouping`, `the-calendar` |
| `balance` | pans of numbered weights with no letters, an unknown drawn as a box, equation cards sorted into true and false | `equals-sign`, `missing-number` |

## Scenes that stories reuse as they are

`grid` `multiples`, `remainders` and `mark`, `parts` `shade`, `fraction`, `equivalent`, `compare`, `add` and
`mixed`, and `geo` `rectangle`, `triangle`, `quadrilateral` and `regular-polygon`.

## Decisions the plans leave open

Each of these is decided when its story is built.

- The meaning of 3 × 4. `equal-groups` reads the first number as the count of groups. Japan writes the size of the
  group first, and the Turkish text needs the order Turkey uses.
- A trapezium. `quadrilaterals-and-polygons` takes it as a shape with at least one pair of parallel sides, so a
  parallelogram is also a trapezium. Curricula differ.
- Money before decimals. `money` writes an amount as "3 and 45" until `tenths-and-hundredths` teaches the decimal
  point.
