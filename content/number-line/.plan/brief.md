# The number line

The brief of the story `number-line`. `specs/stories/number-line.md` was its rough map, `research.md` holds what
the sources say and `terms.md` the words the story gives its reader.

## Strategy

- **Subject:** whole numbers as points along a line, with equal gaps between them.
- **Level:** beginner. The reader knows the story `counting`: one number for each object, counting on and back, and
  counting to 100 in rows of ten.
- **At the end the reader can:** read the number at a mark, jump to the number after and the number before, read a
  line whose marks count in tens, fives or twos, read a piece of the line that starts past zero, fill in missing
  labels from the step, place a number on a line with few labels, and estimate where a number is on an unmarked
  line.
- **Family and figure:** `line`, a new family of hesap. Its one scene draws a straight line from left to right with
  marks at equal gaps, labels on some marks, and a point the reader moves. The stories `skip-counting`,
  `adding-within-20`, `fact-families`, `adding-tens-and-ones`, `missing-number` and `rounding-and-estimating` use the
  family after this one, so this story builds the line, the marks, the labels, the point and the jumps.
- **Interaction that suits the subject:** the reader drags a point that snaps to the marks, jumps it with + and −,
  picks the step between marks, taps a gap between two tens to open it, drags label cards onto marks, drags a point
  freely on an unmarked line and presses Show to see where the number is, and steps an estimate whose estimate mark
  moves along the line. Each page gives the reader one of these for the first time, or joins two of them.
- **Exercises that suit the subject:** the engine draws a line and a target number, the reader puts the point on
  the target and commits with Check. The number of the point is hidden, so the reader has to count gaps, find the
  step or judge the distance from the ends.
- **The line shows places in the count.** The story `centimetres-and-metres` reads the same line as lengths from 0.

## Sections

Page folders take the numbers of the section's range, in tens. World pages and challenges sit after the sections,
in the ranges given.

### 010 `in-order` Numbers in order on a line

- **Pages:** 110 to 190. Opens the story at 110.
- **Needs:** counting on and back, from the story `counting`.
- **Teaches:** the numbers of the count sit at marks along a line, from left to right, and the gaps between the
  marks are equal. The line starts at 0, one gap before 1. Of two numbers, the one further to the right comes later
  in the count. A jump crosses one gap: a jump to the right goes to the number after and a jump to the left to the
  number before, so the jumps from 0 to a number are as many as the number. On a line whose marks stand out of
  place the gaps differ, and the reader moves the marks until every gap is equal.
- **Hands on:** the line, the mark, the label, the point, the gap, equal gaps and the jump.
- **Arc:** the opening page raises the idea on a real situation, a row of stepping stones numbered from 1 that a
  frog crosses from the bank. The next page turns the stones into a line, where each number sits at a mark and the
  bank is 0. No challenge.

### 020 `steps` Marks that count in steps

- **Pages:** 210 to 290. Challenge at 710.
- **Needs:** the mark, the label and the point, and counting to 100 in rows of ten.
- **Teaches:** two labels next to each other give the step between marks. The section starts with a step of ten,
  the count the reader knows, and then reads lines with a step of five and of two from their labels. A number
  between two labelled marks sits on a mark between them.
- **Hands on:** the step, and long marks with labels beside short marks without.
- **Arc:** the challenge asks the reader to put the point on a number from 11 to 99 on a line labelled at the tens.

### 030 `part-of-the-line` A line that starts past zero

- **Pages:** 310 to 390. Challenge at 720.
- **Needs:** the step, and labels on some marks only.
- **Teaches:** a line can show a piece of the count, such as 40 to 60. A number that is no ten sits between the ten
  before it and the ten after it, and the gap between two tens holds the nine numbers between them. On a line with
  blank labels, two labels give the step and the step gives the rest.
- **Hands on:** the ends of a line as any two numbers, the ten before and the ten after, and finding a label from
  its neighbours.
- **Arc:** the challenge draws a line with two labels, and the reader finds the step and puts the point on the
  target.

### 040 `placing` Placing a number

- **Pages:** 410 to 490. World page at 610.
- **Needs:** counting gaps from a label, and a line whose ends are any two numbers.
- **Teaches:** on a line from 0 to 20 with labels at the ends only, counting gaps from the nearer end finds a
  number. The middle of a line from 0 to 100 is 50, and the page marks the middle before it asks for a number near
  it.
- **Hands on:** the two ends and the middle as guides, and the Show button.
- **Arc:** the world page is a street of houses numbered 1 to 60 with a few numbers on the doors, where the reader
  drives a van to house 46. No challenge.

### 050 `estimating` Estimating on an unmarked line

- **Pages:** 510 to 590. World page at 620. Challenge at 730. Ends the story at 810.
- **Needs:** the ends and the middle as guides.
- **Teaches:** a line with no marks between its ends still has a place for each number. The section starts on a
  line from 0 to 10 and goes on to 0 to 100. An estimate marks the middle first and judges the distance from the
  ends and the middle, where counting on from one end runs out of room. The same works in reverse, from a point to
  its number, and between ends other than 0 and 100.
- **Hands on:** nothing inside this story. The end page names the stories that follow: `centimetres-and-metres`,
  `fractions-on-a-line`, `rounding-and-estimating` and `bar-charts`.
- **Arc:** the world page is the edge of a closed book of 100 pages, where the reader puts a bookmark at page 75.
  The challenge asks for a number on an unmarked line between drawn ends, and combines the ends, the middle and
  the estimate. The end page closes the story.

## Engine

### line/line (`new`)
Draws: a straight number line from left to right across the stage, with a mark at each step from its left end to its
right end. A labelled mark is long and carries its number under it, and a mark without a label is short. A point
sits on the line. On a marked line the reader drags it and it snaps to the nearest mark, and on an unmarked line it
moves freely. Where the gaps come out narrower than 8px on the stage, as 0 to 100 in ones does on a 390px phone, a
lens above the point shows about ten gaps around it at full size, with the marks and labels the line has there,
while the reader drags or jumps the point. The looks `stones`, `street` and `book` draw the same line for the world
pages. The family has this one scene, so a page writes `scene: line`. Used by: `in-order`, `steps`,
`part-of-the-line`, `placing`, `estimating`, and the challenges 710, 720 and 730.

| Field | Values | Draws and does |
|---|---|---|
| `look` | `line` (default), `stones`, `stones-on-line`, `street`, `book` | `line` is the number line. `stones` is a row of stepping stones numbered from 1, with the frog on the bank, which is 0, and the frog is the point (110). `stones-on-line` draws the stones over the number line, each stone over the mark of its number and the bank over 0, and the frog moves with the point (120). `street` draws a house at each mark, the labels as numbers on the doors and a van as the point (610). `book` draws the edge of a closed book as an unmarked line, a bookmark as the point, and names the Show button "Open the book" (620). |
| `from` | a whole number from 0, default 0 | The number at the left end. A line that starts past zero sets it (030). `stones` and `stones-on-line` start at 0, the bank. |
| `to` | a whole number above `from` | The number at the right end. `to` minus `from` is a multiple of the step, and a marked line holds at most 100 gaps. `stones` and `stones-on-line` reach 20 at most. Under a step segment, `to` is the right end at the starting step. |
| `step` | a whole number, default 1, or `{ segment: [1, 2, 5, 10], start: 10 }` | The number between two marks next to each other. Every gap has the same length whatever the step, and a jump adds one step. A segment lets the reader pick the step: the line keeps its number of gaps, every label changes, and the right end moves. The point keeps its mark and the arcs stay over their gaps, so `jumps` keeps its value and `point` reads the new label (020). A segment page labels every mark. |
| `marks` | `all` (default), `ends` | `all` draws a mark at every step. `ends` draws an unmarked line, with a mark at each end only, and the point moves freely along it (050, `book`). |
| `labels` | `all` (default with `marks: all`), `ends` (default with `marks: ends`), a number, or a list of numbers | The marks that carry their number. A number labels its multiples, such as 10 for the tens of a line in ones or in fives (020). A list labels those numbers alone (030, `street`). Each labelled number is a mark of the line. |
| `blank` | a list of numbers | These marks carry an empty label box (030). Each one is a mark without a label. |
| `cards` | `true`, or a list of numbers | A row of label cards under the line, which the reader drags onto the blank marks. `true` gives one card for each blank. A list names the cards, holds the number of every blank and may hold numbers that fit no blank. A card dropped on its own mark stays there as its label, and a card dropped anywhere else slides back to the row (030). |
| `point` | a whole number from `from` to `to`, default `from`, or `false` | Where the point starts. `false` draws no point, for a page of label cards or of gaps to open (310, 330). |
| `second` | a whole number from `from` to `to` | A second point the reader drags, which differs from the point in shape and in colour (010). |
| `flag` | `true`, `false` (default) | Each point carries its number in a flag above it, which tells two points apart (010, 020). |
| `reading` | `true`, `false` (default) | A line of words under the line says which of the two points comes later in the count (010). |
| `jump` | `true`, `false` (default) | Two buttons, − (Jump left) and + (Jump right). Each press moves the point one gap and draws the jump as an arc over that gap, above the line for a jump to the right and below it for a jump to the left. The arcs show the jumps from the mark where the reader began to jump, so a press against the last jump takes that jump back, and a drag of the point clears the arcs (010, 020, 110). |
| `bracket` | `10` | A bracket over the line from the ten before the point to the ten after it, drawn plain with no mark of its own between its ends, with the labels of both tens lit. It follows the point and hides while the point is on a ten (030). The two tens are marks of the line. |
| `open` | `true`, `false` (default) | A tap on a gap opens it: under the line the gap is drawn again as a line of its own, from its left mark to its right mark, with a labelled mark for every number between, and two thin lines join its ends to the two marks. A tap on another gap opens that one, and a tap on the open gap closes it (030). The step is above 1. |
| `middle` | `true`, `button`, `false` (default) | A long mark with its label halfway between the ends. `button` puts a Middle button in the panel that draws the mark and takes it away (040, 050). On a marked line the middle is a mark. |
| `find` | a whole number from `from` to `to`, or a list of them | The number the reader is asked to place, shown in a Find readout, and a Show button. Show reveals where the number is, as a flag at its place. On a marked line it also writes the number at the point on the point. On an unmarked line the point carries no number, since it may stand between two numbers, and the reader judges the distance from the point to the flag. A move of the point takes the reveal away. A list adds a Next button after Show, which moves to the next number (040, 050, `street`, `book`). A number to find carries no label. |
| `estimate` | `{ slider: [lo, hi], start }` or `{ stepper: [lo, hi], start }` | The reader's estimate of the number at the point. The point stays where `point` puts it, on a whole number. A Show button draws the estimate mark, a pale dashed mark, at the place of the estimate and writes the number at the point on the point, so the reader sees how far the estimate is from the point. A change of the estimate takes both away (050). |
| `moved` | a list of `{ mark, by }`, with `by` a part of a gap from 0.3 to 0.6 in size | Each listed mark starts `by` gaps off its place, to the right for a positive `by`. The reader drags every mark between the two ends along the line, with its label, and a mark stops where its label would come closer than 10px to its neighbour's label on a 390px phone, or a fifth of a gap from the neighbour, whichever comes first. A line of words under the line reads "Some gaps are longer than others." until every mark lies within a tenth of a gap of its place. Then the marks settle on their places and the words read "Every gap is equal." The point snaps to the marks where they stand, and the jump arcs run between them (150). The plan of 010 holds the touch band, the keys and the checks. |
| `draw` | `true`, `false` (default) | A line of label cards drawn at random, with a button New line that draws another, and the page opens on a draw. Each draw takes a step from 2, 5 and 10, a left end past zero that is a multiple of the step, and 6 gaps with a right end of 100 or below. Two marks next to each other carry labels, the other five are blank, and six cards hold the five missing labels and one number that fits no mark. A draw resets the line and takes every placed card back. The page has no Check, and its one link id is `placed` (330). The plan of 030 holds the ranges and the fields it leaves out. |
| `readout` | a list of link ids | Chips in the panel, from the link ids the page offers, `reading` aside. |
| `challenge` | `{ goal, ... }` | One of the goals below. |

| Goal | Draws | Reached |
|---|---|---|
| `place` | A target from `target: [lo, hi]` on the line the page's fields give, which is a marked line with `labels` other than `all`. The target is no labelled mark and not the point's start. 710 writes `from: 0`, `to: 100`, `labels: 10`, `jump: true` and `target: [11, 99]`. | The reader drags or jumps the point onto the target and presses Check. The goal line names the target, and a wrong Check says whether the point is to its left or to its right. |
| `place-two-labels` | The line: a step from `step: [2, 5, 10]`, a left end from `from: [0, 50]` that is a multiple of the step, and 10 gaps, with the right end at 100 or below. Two marks next to each other carry labels, and the target is another mark at least three steps from both. The point starts on one of the two labelled marks. The two ends are marks like the others, short while they carry no label. | The reader drags the point onto the target and presses Check (720). |
| `place-unmarked` | An unmarked line with ends from `from: [0, 30]` and `to: [40, 100]`, both tens, at least 40 apart and 40, 60, 80 or 100 apart, so the middle is a ten. The target is at least a tenth of the length from each end and from the middle. The point starts at the left end. | The reader drags the point and presses Check, and the goal holds within a tenth of the line's length of the target. The goal line reads "Put the point close to {target}" (730). |

| Link id | Reads |
|---|---|
| `point` | The number at the point. A page with `find` or `estimate`, or with an unmarked line, offers no `point` link. |
| `second` | The number at the second point. |
| `reading` | The line of words, such as "7 comes later in the count than 4" or "Both points are on 5". |
| `jumps` | The jumps from the mark where the reader began to jump to the point, 0 as the page opens. |
| `step` | The step. |
| `from`, `to` | The two ends. `to` follows a step segment. |
| `middle` | The number at the middle. |
| `ten-before`, `ten-after` | The ten before and the ten after the point, on a page with `bracket`. Each reads a dash while the point is on a ten. |
| `find` | The number to place. |
| `estimate` | The reader's estimate. |
| `placed` | The cards that sit on their own marks. |
| `gaps` | The line of words of a `moved` page, "Some gaps are longer than others." or "Every gap is equal." |

Every goal answers Check the same way. A wrong Check says whether the point is to the left or to the right of the
target. While the goal holds, the point shows its number in a flag above it, drawn as `flag` draws it, and
`place-two-labels` shows the label of every mark. `place-unmarked` shows a flag at the target's place and leaves the point without a number. A move of the point hides them along with the tick.

Fields that go together:
- `second` goes with `flag`, and `reading` goes with `second`. `cards` goes with `blank`.
- `jump`, `second`, `bracket` and `open` take a marked line. `estimate` takes `marks: ends`.
- A step segment leaves out `blank`, `cards`, `find` and `estimate`.
- `moved` takes a line from 0 with a step of 1, every mark labelled and `to` from 4 to 12, with `point`, `jump` and
  `readout`, and leaves out every other field.
- `stones` and `stones-on-line` take `to`, `point`, `jump` and `readout`. `street` takes a marked line, `labels` as a list and
  `find`. `book` takes `from`, `to`, `point` and `find`, as a number or a list.
- A challenge page has `look: line` and no `readout`, `flag`, `find` or `estimate`. `place` keeps the page's line
  fields and `jump`. `place-two-labels` and `place-unmarked` draw the line, so the page leaves out every line field. `place-unmarked` takes `middle: button` (730).

Fields a page sets alone: `find` and `estimate` each make a page of their own. A find page leaves out `second`,
`flag` and `reading`. An estimate page leaves out `jump` and `find`.

The later stories of the family widen these fields under the same names: `jump` takes a size for jumps across
several marks (`skip-counting`), the start of the jumps gets a handle of its own (`adding-within-20`), and `bracket`
takes 100 and 1000 and lights the nearer end (`rounding-and-estimating`).

### Build order
The story has one scene, and every section extends it, so one engine author builds the sections one after the other:
1. 010: the line, the marks, the labels, the point and its drag, `second`, `flag`, `reading`, `jump`, and the looks
   `stones` and `stones-on-line`. `moved`, with the link `gaps`, was added after the audit.
2. 020: `step` with its segment, which adds `segment` to `value` in hesap's `src/node.mjs`, labels at multiples, long
   and short marks, and the lens. Then the goal `place`.
3. 030: `from` past zero, `bracket`, `open`, `blank` and `cards`. Then the goal `place-two-labels`.
4. 040: `labels: ends`, `middle`, `find` with Show and Next, and the look `street`.
5. 050: `marks: ends` with the free point, `estimate` and the estimate mark, and the look `book`. Then the goal
   `place-unmarked`.
