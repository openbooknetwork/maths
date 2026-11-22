# Skip counting

The brief of the story `skip-counting`. `specs/stories/skip-counting.md` was its rough map, `research.md` holds what
the sources say and `terms.md` the words the story gives its reader.

## Strategy

- **Subject:** counting in equal steps. Counting in twos, fives, tens and hundreds, from 0 and from any start, and
  back. Each jump adds the same number, and a bigger jump reaches a number in fewer jumps.
- **Level:** beginner. The reader knows `counting`: one number for each object, counting on and back, counting to
  100 in rows of ten.
- **At the end the reader can:** count in twos, fives and tens to 100 and in hundreds to 1000, from 0 and from
  another start, count back in the same steps, say which numbers a count lands on (the twos from 0 are even, the
  fives end in 5 or 0, the tens end in 0), and count a set of objects that come in groups.
- **Family and figure:** the family `line` (a number line with equal jumps and a group of objects drawn above each
  jump), and the hundred square where a count lights its cells. The reader adds and takes away jumps, picks the
  size of a jump and drags the start.
- **Interaction that suits the subject:** a jump at a time with the landing said aloud, a count back, a moved start,
  comparing counts on the hundred square, and choosing a jump size to reach a number.
- **Exercises that suit the subject:** the engine draws a target and a jump size, or a start and a target, and the
  reader makes the jumps that land on it. The landings are hidden so the reader counts.

## What the story takes from earlier stories

The story teaches no earlier idea again, as the user ruled on 2026-11-17. Where it needs an earlier idea, one page
goes over its logic.

- Counting on and back, and counting to 100 in rows of ten, from `counting`. The first section goes over a count in
  a sentence, since a skip count is a count that says every second number, or every fifth.
- Jumps of a step on a labelled line, from `number-line` page 210, which is not a need of this story. Skip counting
  says the landings aloud as a count, which page 210 does not, and may point to that page.

## Sections

Page folders take the numbers of the section's range, in tens. World pages and challenges sit after the sections,
in the ranges given. Each count goes forward and back in its own section, and no count on a page takes more than
ten jumps, as England's guidance does. The numbers a count lands on are its multiples, from section 030.

### 010 `twos` Counting in twos

- **Pages:** 110 to 190. Opens the story at 110. World page at 610.
- **Needs:** counting on and back.
- **Teaches:** counting in twos says every second number, 2, 4, 6, 8, and each jump adds two. Counting back in twos
  takes two away at each jump. From 0 the count lands on the even numbers, and from 1 on the odd numbers it jumped
  over.
- **Hands on:** a jump of a size, the count said at each number you land on, even and odd.
- **Arc:** the opening page is socks pegged in pairs on a washing line. The world page is wheels in a bike rack,
  two for each bike. No challenge.

### 020 `tens` Counting in tens

- **Pages:** 210 to 290. World page at 620. No challenge: the one `land-on` challenge is 720, after the fives.
- **Needs:** a count in equal jumps.
- **Teaches:** counting in tens from 0 lands on numbers that end in 0, and counting back in tens returns to 0. From
  any start, a jump of ten keeps the last digit and adds one to the digit before it. On the hundred square the
  tens fill the last column.
- **Hands on:** the hundred square, the count in tens from any start.
- **Arc:** the world page is pencils in boxes of ten and loose pencils, counted in tens and then in ones. The
  challenge draws a jump size of 2 or 10 and a target, and the reader lands on it in equal jumps.

### 030 `fives` Counting in fives

- **Pages:** 310 to 390. Challenge at 720.
- **Needs:** counting in tens.
- **Teaches:** counting in fives goes 5, 10, 15, landing on every ten and on the number halfway between, so every
  number it lands on ends in 5 or 0. Counting back in fives from 50 goes 45, 40 and reaches 0. The numbers a count
  lands on are its multiples, and every multiple of 10 is a multiple of 5 and of 2 too.
- **Hands on:** the word multiple.
- **Arc:** a hand of five fingers above each jump, and the hundred square, where the fives fill two columns. The
  challenge draws a jump size of 2, 5 or 10 and a target, and the reader lands on it.

### 040 `hundreds` Counting in hundreds

- **Pages:** 410 to 490. World page at 630. Challenge at 730. Ends the story at 810.
- **Needs:** counting in tens from any start.
- **Teaches:** counting in hundreds goes 100, 200, 300 and reaches 1000 after ten jumps. A number past 100 is read
  hundreds first, as 863 is eight hundred and sixty-three, which page 420 says before any count uses one. From any start, a jump of a
  hundred keeps the last two digits. A bigger jump reaches a number in fewer jumps.
- **Hands on:** nothing inside this story. The end page names `equal-groups`, `telling-the-time`,
  `sorting-and-pictograms` and `number-patterns`.
- **Arc:** the world page is paper in packs of a hundred for a print order. The challenge draws a start and a
  target and the reader picks jumps of 10 or 100 to reach it in nine jumps or fewer. It combines the counts.

## Engine

The story takes the family `line` alone. `line/line` gets a choice of sizes, sizes that count in numbers, jumps of
two sizes in one count, the numbers a count lands on, and a group of objects over each jump, with two goals. The
hundred square is a new scene of the same family, `line/square`, since it draws the same count of jumps from a start
on the numbers 1 to 100 cut into rows of ten. Its fields are its own, so `adding-tens-and-ones` takes it for ten more
without any field of the line. The kit writes numbers up to 9999 without a separator and takes the scene switcher of
`counters`. The story has no page of `counters`.

What the sections draw and change, and what meets it:

| Section | The figure draws, the reader changes | Taken by |
|---|---|---|
| 010 `twos` | a line in ones to 20, jumps of 2 from a start the reader drags, the number said at each landing, a pair over each jump (socks on a washing line at 110, bikes at 610), a count back that takes a pair away at each jump, one object left over from an odd start | `line/line`: `start` and `jump` as they are, new `count` and `groups` |
| 020 `tens` | a line to 100 with jumps of 10 from any start, the hundred square with a count from a start and the tens lit as a column, boxes of ten pencils then loose pencils (620) | `line/line` with new `jump` segment, `mixed`, `groups: pencils` and the goal `land-on`, and `line/square` with `jump`, `start`, `count` and `fill` |
| 030 `fives` | a line to 50 with a hand over each jump and a count back from 50, the hundred square with the twos, fives and tens lit together, the challenge 720 | `line/line` with `groups: hands` and `land-on`, and `line/square` with three counts in `fill` and the link `shared` |
| 040 `hundreds` | a line to 1000 with marks every 10 or 100, jumps of 100 from any start, a choice of 10 or 100, packs of paper (630), the challenge 730 | `line/line` as it is for the line to 1000, `jump` segment, `groups: paper`, the goal `few-jumps`, and the kit's numbers without a separator |

### line/line (as it is, with new fields and goals)
Draws: the number line with jumps of a size from the start's ring, as `fact-families` built it. New: the size of a
jump counts in numbers, a choice of sizes, jumps of two sizes in one count, the numbers the jumps land on, and a row
of groups over the jumps. Used by: `twos` (110, its idea pages, the count back, even and odd, 610), `tens` (the count
in tens from any start, 620), `fives` (the hands, the count back from 50, 720), `hundreds` (the line to 1000,
the hundreds from any start, the bigger the jumps, the fewer you need, 630, 730, the end page 810).

| Field | Values | Draws and does |
|---|---|---|
| `jump` | as it is, the size now counts in numbers, and adds `{ segment: [sizes], start }` | The size of a jump is the number it adds, a multiple of the line's step. On a line in tens a jump of 100 crosses ten gaps and draws one arc over them. On a line in ones the size and the gaps agree, so every page of `fact-families` reads as before. A segment is a row of buttons named "Size of a jump", one for each size, as `step` has one for each step. A change of the size clears the jumps and puts the point on the start, unless the page has `mixed`. `true` stays one gap. Each size fits the line once at least from the start, one way or the other. |
| `mixed` | `true`, `false` (default) | A change of the size keeps the jumps made, so one count takes jumps of two sizes: three jumps of 10 and then four of 1 for 3 boxes and 4 loose pencils (620), or hundreds and then tens (730). The jumps go one way from the start, and the other button takes back the last jump, whatever its size. `jumps` counts every jump. |
| `count` | `true`, `false` (default), and `reveal` from a goal | The numbers the jumps land on, as the reader says them. Each landing carries its number in a small rounded box where two arcs meet, over the line for a jump to the right and under the arcs below it for a jump to the left. The newest box pops in, and the landing's label lights where the mark has one. The count line under the line lists the numbers in order, "2, 4, 6, 8", with the newest in bold. The start is no jump and stays out of the list, so a count from 8 reads "10, 12, 14". The count line is a live region, so a screen reader says each new number. On a narrow line a box that would come within 4px of a newer one hides, and the count line keeps every number. `reveal` hides both until the goal holds. |
| `groups` | `counters`, `socks`, `bikes`, `hands`, `pencils`, `paper` | A row of groups over the arcs that holds as many objects as the number at the point, counted from 0. From 0 to the start stand whole groups of the size, with the objects left over loose at the left end, so a start of 7 in twos shows 1 loose object and 3 pairs, and each group stands over a jump. A jump to the right adds a group over its arc, which pops in. A jump to the left takes the group over its arc away, which stays as a dashed outline, so the groups left hold the number at the point. Each group is as wide as its stretch of the line and named for a screen reader. `counters` draws a loose counter for 1, a row of 2, a row of 5, two rows of five for 10 and a flat of ten rows of ten small squares for 100. `socks` hangs each pair from pegs on a washing line that runs over the whole line (110), with a loose sock for 1. `bikes` stands a bike in each slot of a rack that runs over the line, its two wheels the objects (610). `hands` draws a hand with five fingers spread. `pencils` draws a box of ten pencils for 10 and one pencil standing up for 1 (620). `paper` draws a wrapped pack with 100 printed on it (630). |
| `readout` | adds `groups`, `left-over` | Chips in the panel. |
| `challenge` | adds the goals `land-on` and `few-jumps` | The goals below. |

| Goal | Draws | Reached |
|---|---|---|
| `land-on` | A size from `size: [sizes]`, a list from 2, 5 and 10, and draws its line: from 0 to ten jumps of that size, in ones, with only the two ends labelled. The target is 2 to 9 jumps from the start, never 5 jumps, so no label and no middle gives it away. With `back: true` half the draws start at the right end and count back. The start's ring stays, the point moves by the jump buttons alone, and the count is `reveal`. 720 writes `size: [2, 5, 10]` with `back: true`. A wrong Check takes the jumps back to the start. | The goal line names the count and the target: "Count in twos from 0 and land on 14, then press Check." or "Count back in fives from 50 and land on 35, then press Check." The goal holds when the point is on the target. A wrong Check says "The point is short of 14. Make another jump." or "The point is past 14. Take back a jump." The hint says the first numbers of the count: "Press Jump right and say the count in twos at each jump: 2, 4, 6. Stop when you say 14." Once the goal holds the count shows. |
| `few-jumps` | A start from `start: [lo, hi]`, within 1 to 99, and a target with the same last digit, a hundreds and b tens above it, with a and b each 1 or more and a + b at most `most`. With `back: true` half the draws swap the two, so the count goes back. The goal draws its line: from the start's last digit in steps of 10 to 1000, or to the last mark under 1000 when the last digit is not 0, labelled at its ends and at every hundredth number from the left end, 5, 105, 205. The size is a segment of 10 and 100 that starts on 10, with `mixed`. The jump button of the count's way rests once the count has `most` jumps. 730 writes `start: [11, 99]`, `most: 9` and `back: true`. | The goal line: "Jump from 35 to 365 in 9 jumps or fewer, then press Check." The goal holds when the point is on the target. A wrong Check says "The point is short of 365. Make another jump.", "The point is past 365. Take back a jump." or, at `most` jumps, "That is 9 jumps, and the point is short of 365. Take back some jumps of 10 and jump in hundreds." The hint: "Pick 100 and jump from 35 while you stay under 365: 135, 235, 335. Then pick 10 and jump until you say 365." Once the goal holds the count shows. |

| Link id | Reads |
|---|---|
| `size` | The number a jump adds, the size picked on a segment. |
| `count` | The numbers the jumps landed on, in order, such as "2, 4, 6, 8". A dash before the first jump. It lights the boxes and the count line. |
| `groups` | The whole groups that stand, not the dashed ones. It lights them. |
| `left-over` | The loose objects at the left end, such as 1 for a start of 7 in twos. It lights them. |
| `point`, `start`, `jumps` | As they are. With `mixed`, `jumps` counts every jump. |

The readouts are named "Size of a jump", "Groups" and "Left over", beside the names the line has. `count` takes no
readout, since the figure writes it.

Fields that go together:
- `jump` with a segment takes `step` as a number. Its sizes are different multiples of the step, from the least to
  the greatest.
- `mixed` takes `jump` with a segment or a stepper, and leaves out `undo`.
- `count` takes `start`, `jump` and the line look with every mark, and leaves out `written`, `undo`, `reading`,
  `find`, `estimate`, `moved`, `cards`, `open` and `draw`.
- `groups` takes `count`'s fields, `from: 0`, and sizes the object draws: `socks` 1 and 2, `bikes` 2, `hands` 5,
  `pencils` 1 and 10, `paper` 100, `counters` 1, 2, 5, 10 and 100. On `bikes`, `hands` and `paper` the start is a
  multiple of the size and the ring moves a whole jump at a time. The build fails a page where a group does not fit
  its stretch on a 390px phone: a group needs 28px and a loose object 5px. A line of ten jumps of its size gives
  each jump about 33px.
- A line to 1000 holds 100 gaps at most, as every marked line: marks every 10 from 0 to 1000, every 100, or every
  1 on a stretch of 100 numbers such as 900 to 1000. A start that is no multiple of 10, such as 75, takes a line in
  fives from 0 to 500, or a line in tens from its last digit, 5 to 995.
- A page of `land-on` or `few-jumps` names its goal alone, since the goal draws the line, the start and the jumps,
  and offers no link and no readout.

### line/square (`new`)
Draws: the hundred square, 100 square cells in ten rows of ten with the numbers 1 to 100 in the order of the count,
left to right along each row and row after row. Each cell is as wide as the stage allows, 32px on a 390px phone and
at most 48px, with its number in the middle. A page counts on it in jumps from a start, or lights whole counts from 0
to compare them. Used by: `tens` (the count in tens from any start lands on the cell below, the tens fill the last
column), `fives` (the fives fill two columns, the twos, fives and tens lit together), and later `adding-tens-and-ones`
(ten more is the cell below).

| Field | Values | Draws and does |
|---|---|---|
| `jump` | a whole number from 1, `{ stepper: [lo, hi], start }` or `{ segment: [sizes], start }` | The size of a jump, as on `line/line`, under the same name "Size of a jump". The buttons "Jump back" and "Jump" move the point that many numbers back or on, row after row: a jump of 10 lands on the cell below, and a jump of 1 after a ten lands on the first cell of the next row. The point glides from cell to cell. The jumps go one way from the start, the other button takes back the last jump, and a button rests where its jump would leave the square. A change of the size clears the jumps, unless `mixed`. |
| `start` | a whole number from 0 to 100 | The start of the jumps, a ring in the point's colour round its number. A tap on a cell moves the start there and clears the jumps, and a "Start" stepper in the panel moves it one number at a time, since a cell on a phone is narrower than a 44px touch target. A dashed tile for 0 stands left of the cell 1, outside the square, so a count can start from 0. |
| `mixed` | `true`, `false` (default) | As on `line/line`. Tens and ones in one count, as 34 and two jumps of 10 and five of 1 for `adding-tens-and-ones`. |
| `count` | `true`, `false` (default) | Each cell a jump lands on is lit with a tint, and the point stands on the newest as a disc in the point's colour with its number in white on it. The count line under the square lists the numbers as on `line/line` and is a live region. |
| `fill` | a list of sizes from 2, 5 and 10 | A button for each size, named "Count in twos", "Count in fives" or "Count in tens", lights every number the count from 0 lands on up to 100, at once, with no jumps. The cells light in the order of the count in a wave of about half a second, which the reduced motion preference skips. Each count has its own mark and colour, so two lit counts tell apart by shape: the first size of the list tints the cell, the second draws a ring round the number, and the third draws a thick border round the cell. A cell in two counts carries both marks. Each button is a chip with a swatch of its mark, pressed while its count is lit, and reads how many cells it lights, a dash while off. |
| `lit` | a list of sizes of `fill` | The counts lit as the page opens. |
| `readout` | a list of link ids | Chips in the panel. |

| Link id | Reads |
|---|---|
| `point`, `start`, `size`, `jumps`, `count` | As on `line/line`. `point` lights the point's cell, `start` its ring, `count` the lit cells and the count line. |
| `fill-2`, `fill-5`, `fill-10` | On a page with `fill`, the cells that count lights: 50, 20 and 10. Each lights its cells while the reader points at it, lit or not. |
| `shared` | On a page with `fill`, the cells that every lit count lights, such as 10 for the fives and the tens. A dash while fewer than two counts are lit. It lights them. |

The readouts are named "Number at the point", "Start", "Size of a jump" and "Jumps", as on the line, and `shared`
"In both counts", or "In all three counts" while three are lit.

Fields that go together:
- `jump` takes `start`, and may take `mixed`, `count` and `readout`. `fill` leaves them out.
- `fill` takes `lit` and `readout: [shared]`.
- A page with neither shows the square alone, for a page that names its rows and columns.
- The square has no goal in this story.

### The kit
- `format.js`: `int` groups a number's digits from five digits on, with `useGrouping: 'min2'`, so 1000 reads 1000 in
  English and in Turkish and 10000 reads 10,000. `terms.md` writes 1000 without a separator until
  `hundreds-and-thousands`, and no page of the book writes a number of four digits yet.
- `scenes.js`: the switcher of `counters/scenes.js` moves to the kit, since `line` now has two scenes. `counters`
  imports it from there.

### Turkish strings
The strings take their words from `i18n/terms/tr.yaml`. It has "başlangıç" for the start, "sayı doğrusu" for the
number line and "noktadaki sayı" through the strings the line has. It has no word for these terms, so each string
that names one waits, in English only, until the file has it:
- `jump (number line)`, which the file marks unsourced: "Size of a jump", the square's "Jump" and "Jump back", and
  every goal line, note and hint of `land-on` and `few-jumps`.
- `count in twos, fives, tens, hundreds (numbers)`: the buttons of `fill`, the goal lines and hints of `land-on`.
  The file's "onar, beşer, ikişer saymak" is the sense said of a line's labels.
- `hundred square (figure)` and `cell (hundred square)`: the square's name and its cells' names for a screen reader.
- `group of 2, 5, 10, 100 (objects)` and `pair (things that come in twos)`: the readout "Groups" and the names of
  the groups, such as "A pair of socks".
- `even, odd (numbers)`: the readout "Left over", which counts the objects of an odd start.
- `multiple (numbers)`, `digit, last digit (numbers)`, `skip count (numbers)` and `equal (jumps)` have no entry
  either. No engine string names them.

### Build order
One author builds the family `line`, section by section, since both scenes share its model of the jumps. Nothing in
`line` is built side by side. The `tens-and-ones` author builds in `counters` at the same time, and is told of the
move of `scenes.js`.
1. `line`, 010 `twos`: the size in numbers in `model.js`, and the jumps as a list of sizes from the start, which
   `mixed` and the square take later. Then `count` with its boxes, its count line and the link `count`. Then
   `groups` with `counters`, `socks` and `bikes`, the objects left over, the dashed groups of a count back, the
   links `groups` and `left-over`, and the build's check of their width.
2. `line`, 020 `tens`, once step 1 is in: `jump` with a segment, `mixed` and `groups: pencils` on the line. Then
   the kit's `scenes.js` and `line/square` in its own files with `jump`, `start`, `mixed`, `count`, `fill` and
   `lit`, taking the model of step 1. Then the goal `land-on`.
3. `line`, 030 `fives`, once step 2 is in: `groups: hands`, the three marks of `fill` and the link `shared`, and
   `land-on` with jumps of 5.
4. `line`, 040 `hundreds`, once step 3 is in: the kit's `int` without a separator under five digits, the line to
   1000 checked on a 390px phone, `groups: paper` and the flat of 100 counters, and the goal `few-jumps`.

### Choices made in the user's place
- The hundred square is `line/square`, a scene of `line`, because it draws the line's count of jumps from a start on
  the numbers cut into rows of ten, and shares the model, the size, the start and the count. The prototype `grid`
  colours multiples of a tapped number with no count of jumps, and the rows of `counters/count` hold counters with
  no numbers on the cells.
- The control keeps the engine's name "Size of a jump", which `fact-families` 330 already uses, in place of the
  coined "Jump size" of `terms.md`. `decisions.md` keeps the coined name only unless the engine labels it
  otherwise, so the glossary row `Jump size (figure)` is to read `Size of a jump (figure)`.
- hesap has no sound, so the count said at each landing is written: a box at each landing, a count line under the
  figure, and a live region that a screen reader speaks. The text asks the reader to say each number aloud.
- The size of a jump counts in numbers, so a jump of 100 on a line in tens reads "100" in its link and its stepper.
  Every page that has a size today is a line in ones, where nothing changes.
- The groups hold the number at the point counted from 0, so a count back takes a group away at each jump and an
  odd start shows the object left over, which is how the glossary tells even and odd.
- The square fills a whole count at once, since the fives to 100 take 20 jumps and the brief keeps a count on a
  page to ten jumps. A count of jumps on the square stays for the tens and for a start.
- The marks of `fill` differ by shape as well as colour, a tint, a ring and a border, by the rule that colour is a
  second cue. The square's point is a disc and its start a ring, the shapes they have on the line.
- The square's start moves by a tap on a cell and by a "Start" stepper, since a cell is 32px on a phone.
- `land-on` labels only the line's ends and draws no target 5 jumps away, so the reader counts every jump.
  `few-jumps` rests the jump button at nine jumps, so a count on the page stays within ten jumps, and draws a and b
  of 1 or more, so every draw needs both sizes.
- A start that is no multiple of 10 on a line to 1000 takes a shorter line or a line from its last digit, since a
  marked line holds 100 gaps and a phone shows them 3px apart.
