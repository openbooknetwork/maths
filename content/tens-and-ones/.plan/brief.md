# Tens and ones

The brief of the story `tens-and-ones`. `specs/stories/tens-and-ones.md` was its rough map, `research.md` holds what
the sources say and `terms.md` the words the story gives its reader.

## Strategy

- **Subject:** place value with two digits. Ten ones make a ten, a number from 11 to 99 is some tens and some ones,
  the left digit counts tens and the right digit counts ones, the place of a digit sets its value, and a ten
  can be broken into ten ones without changing the number.
- **Level:** beginner. The reader knows `counting`: one number for each object, counting on and back, counting to
  100, and counters in rows of ten with the ten at the end of each row.
- **At the end the reader can:** bundle ones into tens and count the tens first, say and write a number from 11 to
  99 as tens and ones, read the value of each digit, explain why 34 and 43 differ, write a two-digit number as its
  tens and ones together (56 is 50 and 6), and show one number in more than one way by breaking a ten.
- **Family and figure:** `counters`, with a new scene of base ten blocks on a place value chart: rods of ten and
  single cubes in a tens column and a ones column, with the digits under the columns. The reader drags pieces on
  and off, bundles ten cubes into a rod, and taps a rod to break it into ten cubes.
- **Interaction that suits the subject:** bundling loose objects into tens, building a number with rods and cubes,
  setting the tens and the ones with steppers and watching the digits follow, swapping two digits, and breaking a
  ten.
- **Exercises that suit the subject:** the engine draws a number, and the reader builds it, or shows it with a
  drawn number of ones, or fills an order with too few tens. The digits are hidden where they would give the
  answer away.

## What the story takes from earlier stories

The story teaches no earlier idea again, as the user ruled on 2026-11-17. Where it needs an earlier idea, one page
goes over its logic.

- Counting to 100 in rows of ten, with the ten at the end of each row, from `counting` pages 080 and 090. The first
  section points back to it in a sentence where it bundles tens.
- A number from 11 to 20 as a full ten and some more, from `number-bonds` page 080, which is not a need of this
  story. The teen section teaches the teen numbers as tens and ones from the start and may point to that page.

## Sections

Page folders take the numbers of the section's range, in tens. World pages and challenges sit after the sections,
in the ranges given. The first pages of each section keep the numbers small.

### 010 `ten-ones` Ten ones make a ten

- **Pages:** 110 to 190. Opens the story at 110.
- **Needs:** counting to 100.
- **Teaches:** ten ones joined together make one ten. A group made only of tens is counted in tens, 10, 20, 30.
  Bundling a large group into tens leaves the number the same and makes it quick to count: count the tens first,
  then count on the ones.
- **Hands on:** a ten and a one as units, the rod and the cube, bundling.
- **Arc:** the opening page is a jar of pencils that the reader ties in bundles of ten. The first pages count
  collections of whole tens before any loose ones, as IM and NCETM do. No challenge.

### 020 `teens` The teen numbers

- **Pages:** 210 to 290.
- **Needs:** a ten and ones.
- **Teaches:** each number from 11 to 19 is one ten and some ones, which can be read "1 ten and 1 one, 1 ten and 2 ones".
  The names thirteen to nineteen say their ones, and eleven and twelve have names of their own. Fourteen is one ten
  and four ones, and forty is four tens, two numbers whose names sound alike.
- **Hands on:** reading a teen number as a ten and ones.
- **Arc:** a rod and a stepper for the ones. No challenge.

### 030 `two-digits` Two digits for tens and ones

- **Pages:** 310 to 390. Challenge at 710.
- **Needs:** a ten, ones, the teen numbers.
- **Teaches:** in a two-digit number the left digit counts tens and the right digit counts ones. Up to 9 tens and
  9 ones show every number up to 99. A 0 in the ones place shows there are no ones. Forty-three is written 43, the
  tens digit and the ones digit side by side, and not 403, which writes what is heard.
- **Hands on:** the tens digit and the ones digit, the place value chart.
- **Arc:** the place value chart with its columns and digits. The challenge draws a number from 11 to 99, and the reader builds
  it on an empty chart with the digits hidden.

### 040 `place` The place of a digit

- **Pages:** 410 to 490. World page at 610.
- **Needs:** the tens digit and the ones digit.
- **Teaches:** the place of a digit sets its value: a 7 in the tens place has the value 70, and in the ones place
  7. So 34 and 43 are different numbers. A two-digit number is the value of its tens together with the value of its
  ones, so 56 is 50 and 6.
- **Hands on:** the value of a digit, the number as its tens and its ones together.
- **Arc:** the world page is a florist tying roses in bunches of ten, who knows the stock from the bunches and the
  loose roses. No challenge.

### 050 `breaking-a-ten` Breaking a ten

- **Pages:** 510 to 590. World page at 620. Challenges at 720 and 730. Ends the story at 810.
- **Needs:** the number as its tens and ones.
- **Teaches:** breaking a ten into ten ones leaves the number the same, so 42 is 4 tens and 2 ones and also 3 tens
  and 12 ones. One number can be shown in many ways.
- **Hands on:** breaking a ten, which `adding-tens-and-ones` uses for subtracting.
- **Arc:** the world page is a stationery shop selling pencils in packs of ten and singly. The first challenge draws
  a number and a number of ones from 10 to 19, and the reader breaks a ten to show it. The second fills an order
  from a shelf with too few packs, so single pencils stand in for the missing packs; it combines tens and ones and
  breaking a ten. The end page names `adding-tens-and-ones` and `hundreds-and-thousands`.

## Engine

The story takes one family. `counters` gets a new scene, `base-ten`, for base ten blocks with and without the place
value chart, and the kit gets the number names of a language. `adding-tens-and-ones` takes the same scene with the
fields it adds, listed under the scene, so each field has its one name now. The scene registers in the family's
browser half through the kit's scene switcher, which `skip-counting` moves out of `counters/scenes.js` into the kit.
The story has no page of `bonds`, `count`, `match`, `order`, `add` or `bar`.

### Number names (kit `format.js`, `new`)
Draws: nothing of its own. `named(lang)` gives `name(n)`, the number name of a whole number from 0 to 99 in the
page's language, such as "forty-two", "fourteen" and "eleven" in English and "kırk iki", "on dört" and "on bir" in
Turkish. The build and the browser both use it, so a text and its live value agree. The names are the plain words of
the language and take no entry of `i18n/terms/`. `hundreds-and-thousands` widens it past 99. Used by:
`counters/base-ten`.

### counters/base-ten (`new`)
Draws: base ten blocks. A rod is ten cubes joined in an upright row, drawn with a line between each two cubes so its
ten ones show, and a cube is one block of the same size as a cube of the rod. With the chart, the place value chart
stands across the stage: two columns side by side under the heads "Tens" on the left and "Ones" on the right, with
the rods standing side by side in the tens column and the cubes in the ones column in rows of five, each ten of them
two rows with a small gap after them, so ten cubes read as a ten before they are bundled. Without the chart, the
rods lie side by side on the left and the cubes after them, scattered on a grid that keeps them apart, so a large
group is slow to count by ones. The blocks of one number are in the family's red. Used by: `ten-ones` (110 and its
pages), `teens`, `two-digits` (its pages and 710), `place` (its pages and 610), `breaking-a-ten` (its pages, 620, 720
and 730), and later `adding-tens-and-ones`.

A column is the touch target of the pieces in it, since a rod or a cube on a 390px phone is narrower than a finger: a
press on the tens column takes its last rod and a press on the ones column its last cube. Without the chart a piece
is its own target, and the pages that tap pieces one by one keep them few (see `tap`). A focused column takes Enter
or Space as a tap and Delete or Backspace as a drag back to the supply.

| Field | Values | Draws and does |
|---|---|---|
| `look` | `blocks` (default), `jar`, `florist`, `shop` | `blocks` is the base ten blocks. `jar` is a glass jar of pencils on a table: the cubes are pencils in the jar, and a rod is a bundle of ten pencils with a band round it, lying on the table beside the jar (110). `florist` is a florist's counter: the tens column is a bucket of bunches of ten roses, each bunch tied with a ribbon, and the ones column a jug of roses (610). `shop` is a stationery shop: the supply is a shelf of packs of ten pencils and pencils sold one by one, and the chart is the tray of an order on the counter, its columns headed "Packs" and "Pencils" (620, 730). Every look keeps the rules of the blocks, so a bundle, a bunch and a pack are each a ten. |
| `chart` | `true` (default), `false` | The place value chart, or the blocks without it for the pages before the chart is named (`ten-ones`, `teens`) and for a page on blocks set out in any order (`place`). |
| `tens` | a whole number from 0 to 9, or `{ stepper: [lo, hi], start }` | The rods as the page opens, or on the stepper "Tens". A change of the stepper adds or takes away rods at the end of the row. |
| `ones` | a whole number, or `{ stepper: [lo, hi], start }` | The cubes as the page opens, or on the stepper "Ones": from 0 to 29 with the chart and from 0 to 99 without it, with `tens` × 10 + `ones` at most 99. The ones column holds up to 29 cubes, so a number shows with up to two tens broken. |
| `supply` | `true`, or `{ tens, ones }` | A supply beside the chart, or under it where that shows the figure larger: one rod and one cube to take, each with a touch area of 44px at least. The reader drags a rod or a cube from it onto the chart, or without the chart anywhere on the stage, and it lands in its column. A tap on the supply's rod or cube puts one in. A rod or a cube dragged off the chart goes back. A piece that would pass 9 rods, 29 cubes or 99 in all goes back to the supply with a shake. `{ tens, ones }` gives the supply that many rods and cubes and no more, drawn as a stack of rods and a heap of cubes with their numbers beside them (`shop`). |
| `bundle` | `true`, `false` (default) | A button "Bundle ten ones" in the panel. A press takes ten cubes, which glide together into a rod, and the rod glides into the tens column, or to the row of rods without the chart. The number stays the same. It rests while there are fewer than 10 cubes or 9 rods already. On `jar` it is "Tie a bundle" and a band goes round ten pencils, and on `florist` "Tie a bunch". |
| `tap` | `tag`, `break` | What a tap on a piece does. `tag` gives the tapped piece the next number of the count: a rod adds 10 and a cube adds 1, and the piece carries its number, so 3 rods and 4 cubes counted rods first carry 10, 20, 30, 31, 32, 33, 34. A tapped piece keeps its number. `break` breaks a rod into ten cubes: with the chart a tap on the tens column breaks its last rod, whose cubes glide into the ones column, and without the chart a tap on a rod breaks it where it lies. The number stays the same. A tap that would pass 29 cubes in the ones column takes no rod and gives a shake. |
| `mix` | `true`, `false` (default) | Without the chart, a button "Mix up the blocks" sets the rods and the cubes in new places among each other and takes every number of `tag` off. The number stays the same, for the pages that count the tens first wherever they lie. |
| `swap` | `true`, `false` (default) | A button "Swap the digits" trades the number of rods and the number of cubes, so 3 tens and 4 ones become 4 tens and 3 ones, with a glide of the pieces that change. It rests while a column holds more than 9. |
| `digits` | `true` (default with the chart), `false` | Under each column, the number of pieces in it, in digits. While each column holds 9 or fewer these are the tens digit and the ones digit of the number. After a ten is broken they read 3 and 12 for 42, which is the point of `breaking-a-ten`. |
| `number` | `true`, `false` (default) | The number the blocks show, tens × 10 + ones, written large in digits above the chart, its tens digit over the tens column and its ones digit over the ones column, and a one-digit number over the ones column alone. It reads 42 for 3 tens and 12 ones as for 4 tens and 2 ones. Without the chart it stands above the blocks. |
| `name` | `true`, `false` (default) | The number name of the number under it, or above the blocks without the number, such as "forty-two", from the kit's `named`. |
| `values` | `true`, `cards` | `true` writes the value of each column under its digit: 40 and 2 for 4 tens and 2 ones, and 30 and 12 after a ten is broken. `cards` draws the two values as two cards under the chart, the tens card "40" and the ones card "3", side by side so they read 40 3, as a reader writes what is heard. A tap on the ones card slides it onto the tens card over its 0, so the cards read 43, and a tap slides it back. With no tens the tens card is not drawn. |
| `written` | `true` | The written line of the kit under the figure: the value of the tens plus the value of the ones, such as "50 + 6 = 56", and "30 + 12 = 42" after a ten is broken. Each number carries its link id: `tens-value`, `ones-value` and `number`. |
| `order` | a whole number from 1 to 99 | On `shop`, the slip of a customer's order on the counter, with the number of pencils asked for. |
| `readout` | a list of link ids | Chips in the panel. |
| `challenge` | `{ goal, ... }` | One of the goals below. |

The model keeps the places in one list from the ones up and draws a column for each, so `hundreds-and-thousands`
adds the field `hundreds`, a hundreds column on the left with flats of a hundred cubes, and the links `hundreds`,
`hundreds-digit` and `hundreds-value` under the same pattern.

| Goal | Draws | Reached |
|---|---|---|
| `build-number` | A number from `number: [lo, hi]`, within 1 to 99. The chart opens empty with the supply and the Bundle button, and with no digits, no number, no values, no name and no steppers, since each gives the number away. 710 writes `number: [11, 99]`. | The goal line names the number: "Build 47 with rods and cubes, then press Check." The goal holds when the blocks show the number with 9 cubes or fewer. A wrong Check says "The blocks show 52, more than 47.", "The blocks show 38, less than 47." or, with the number right and 10 or more cubes, "The blocks show 47 with 17 ones. Bundle ten ones into a ten." The hint says "47 is 4 tens and 7 ones. Put 4 rods in the tens column and 7 cubes in the ones column." |
| `show-with-ones` | A number from `number: [lo, hi]`, within 10 to 99, and a number of ones from `ones: [lo, hi]`, within 10 to 29, that ends in the number's ones digit and is at most the number, so the drawn ones are the ones digit and one or two broken tens. The chart opens with the number in tens and ones, with `tap: break`, the Bundle button, the digits and the number. 720 writes `number: [21, 99]` and `ones: [10, 19]`. | The goal line: "Show 42 with 12 ones, then press Check." The goal holds when the ones column holds the drawn ones. The number stays 42 throughout, since breaking and bundling keep it. A wrong Check says "The ones column holds 2 ones, and 12 are asked. Break a ten to get more ones." or "The ones column holds 22 ones, and 12 are asked. Bundle ten ones into a ten." The hint says "12 ones are 2 ones and 10 more. Break 1 ten into ten ones." |
| `fill-order` | On `shop`. An order from `order: [lo, hi]`, within 11 to 99, and a number of missing packs from `short: [lo, hi]`, within 1 to 2. The shelf holds the order's tens less the missing packs, and pencils enough to make up the rest, the order's ones and 10 for each missing pack, with up to 9 more drawn so the shelf does not hand over the answer, 29 at most. The tray opens empty with its digits, without the number, the values and the name. 730 writes `order: [31, 79]` and `short: [1, 2]`. | The goal line: "A customer asks for 43 pencils, and the shelf has only 2 packs. Fill the order, then press Check." The goal holds when the tray holds the pencils of the order. A wrong Check says "The order holds 47 pencils, more than 43." or "The order holds 38 pencils, fewer than 43." The hint says "The 2 packs make 20. 43 needs 23 more, so put 23 pencils in the tray." |

| Link id | Reads |
|---|---|
| `number` | The number the blocks show, tens × 10 + ones, such as 42. It lights every piece and the written number. |
| `tens`, `ones` | The rods and the cubes, such as 4 and 2, or 3 and 12 after a ten is broken. Each lights its column, or its pieces without the chart, and its count under the column. |
| `tens-digit`, `ones-digit` | The tens digit and the ones digit of the number, 4 and 2 for 42 however its blocks lie. Each lights its digit of the written number. |
| `tens-value`, `ones-value` | The value of the rods and of the cubes, 40 and 2, or 30 and 12 after a ten is broken. Each lights its value and its column. |
| `name` | The number name, such as "forty-two". |
| `tens-and-ones` | The number as its tens and ones, "4 tens and 2 ones", "1 ten and 4 ones", "0 tens and 7 ones", "3 tens and 12 ones". |
| `written`, `reading` | With `written`, the line "40 + 2 = 42" and its words, "40 plus 2 is equal to 42". |
| `count` | On a `tag` page, the last number said, 0 before the first tap. |
| `order` | On `shop` with `order`, the pencils asked for. |
| `supply-tens`, `supply-ones` | With a supply of `{ tens, ones }`, the rods and cubes left in it, the packs and pencils on the shelf on `shop`. |

The readouts are named without a colour: "Number", "Tens", "Ones", "Tens digit", "Ones digit", "Value of the tens",
"Value of the ones", "Number name", "Tens and ones", and "Last number said" for `count`. The kit names the written
line and its words. On `jar` the readouts of `tens`, `ones` and `number` are "Bundles", "Pencils in the jar" and
"Pencils", on `florist` "Bunches", "Roses in the jug" and "Roses", and on `shop` "Packs", "Pencils" and "Pencils in
the order", with "Packs on the shelf", "Pencils on the shelf" and "Order" for the supply and the slip. The steppers
take the names of their readouts. The figure names its parts for a screen reader: the chart "Place value chart", each
column "Tens column, 4 rods" and "Ones column, 2 cubes", and the supply "Blocks to use".

Fields that go together:
- Without the chart a page leaves out `digits`, `values` and `swap`. `mix` and `tap: tag` take `chart: false`.
- `tap: tag` takes at most 9 rods and 9 cubes, so each piece keeps a 44px touch area, and leaves out steppers,
  `supply` and `bundle`.
- A stepper of `tens` or `ones` leaves out `supply`, `bundle`, `tap` and `swap`, so the stepper and the blocks always
  agree. Both may have a stepper. A stepper's range lies within its field's range.
- `values: cards` takes the chart, `tens` and `ones` from 0 to 9, and leaves out `supply`, `bundle` and `tap`.
- `jar` takes `chart: false` and `bundle`. `florist` and `shop` take the chart. `order` takes `shop`, and `shop` takes
  `supply` as `{ tens, ones }`.
- A challenge page names its goal. The goal sets the blocks, the supply, the buttons and what shows, so the page
  leaves every other field out, `look: shop` on `fill-order` aside, and offers no link and no readout.

What `adding-tens-and-ones` adds, under these names and built with that story:
- `second`: a whole number or a stepper, a second number whose rods and cubes join the first number's in the same
  columns, after them, in the family's blue with a dot on each cube, so they differ by place and by the dot as well
  as by colour. `tens` and `ones` stay the first number. `waiting`: the second number's blocks wait beside the chart
  and the reader drags or taps them in, as `waiting` of `counters/add` does. `take`: a page that takes away, where
  `second` counts the pieces taken, and a piece dragged off the chart leaves its dashed outline, which a tap fills
  again, as `take` of `counters/add` does.
- `written: ten` with the two steps of making ten under the line, and `written: places` with the line of the tens and
  the line of the ones under it. The links `first`, `second`, `sum`, `left`, `to-ten`, `rest` and their written
  lines take the names of `counters/add`, and `written-tens`, `written-ones` and their readings are new.
- The goals of its challenges 710, 720 and 730, and the looks of its world pages, the biscuits 110, the basketball
  610 and the sticker album 620, are designed with that story.

### Turkish strings
The strings take their words from `i18n/terms/tr.yaml`. It has "onluk" for `ten, one (numbers)` with a note that it also
names a ten block, and "artı" and "eksi" for the written line, which the kit has already. It has no word for these
terms, so each string that names one waits, in English only, as `# waits:` in `tr.yaml`, until the file has it:
- `ten, one (numbers)`: the column heads, the steppers and readouts "Tens" and "Ones", the four strings of
  `tens-and-ones`, the column names, and every goal line, note and hint.
- `rod, cube (base ten blocks)`: the column names, the goal line and hint of `build-number`.
- `base ten blocks (figure)`: "Blocks to use" and "Mix up the blocks".
- `bundle (place value)`: "Bundle ten ones", "Tie a bundle", "Tie a bunch" and the notes that say to bundle.
- `break a ten (place value)`: the note and the hint of `show-with-ones`.
- `digit, last digit (numbers)` and `tens digit, ones digit (two-digit numbers)`: "Swap the digits", "Tens digit"
  and "Ones digit".
- `value (digits)`: "Value of the tens" and "Value of the ones".
- `number name (numbers)`: "Number name".
- `place value chart (figure)` and `column (place value chart)`: the screen reader names of the chart and its columns.
- `teen number (numbers)`, `two-digit number (numbers)`, `place, tens place, ones place (digits)` and `place value
  (numbers)` have no entry either. No engine string names them.
The plain words take Turkish now: "Sayı" for "Number", the kit's strings, the readouts of `jar`, `florist` and `shop`
that name pencils, roses, packs, bunches, the shelf and the order, and the number names of `named`.

### Build order
One engine author works on `counters`, one section after another, since every step changes the scene's files. It
starts once the `skip-counting` author has moved the scene switcher into the kit, since step 1 registers the scene
there. The `line` work of `skip-counting` goes on side by side.
1. `ten-ones`: the kit's `named` in English and Turkish, then `counters/base-ten` in its own files
   (`base-ten.mjs`, `base-ten.js`, `base-ten-model.js`, `base-ten-figures.js`) with `chart: false`, `tens`, `ones`,
   the steppers, `supply`, `bundle`, `tap: tag`, `mix`, `number`, the links `number`, `tens`, `ones` and `count`, and
   the look `jar`.
2. `teens`: `name` and the links `name` and `tens-and-ones`.
3. `two-digits`: the chart with its columns, `digits`, the links `tens-digit` and `ones-digit`, and `values` with
   `cards`.
4. `place`: `values: true`, `written`, `swap`, the links `tens-value`, `ones-value`, `written` and `reading`, and the
   look `florist`.
5. `breaking-a-ten`: `tap: break`, the ones column past 9, `supply` as `{ tens, ones }`, the look `shop` with
   `order`, and the links `order`, `supply-tens` and `supply-ones`.
6. The challenges, with the word `challenge`: `build-number` (710), then `show-with-ones` (720) and `fill-order`
   (730), in `base-ten-goals.js`.
`adding-tens-and-ones` adds its fields after step 6, on the same files.

### Choices made in the user's place
- The scene is `counters/base-ten`, named after the blocks it draws. `blocks` is taken already as a value of `show`
  on `counters/order`, where it means two blocks of counters in rows of ten.
- A column is the touch target of its pieces, so a tap breaks the column's last rod and a drag takes its last piece:
  the rods and cubes of a full chart are narrower than 44px on a phone, and every rod and every cube of a column is
  the same.
- Bundling is a button. A gesture that gathers ten cubes needs ten drags or a lasso, and a tap on the ones column is
  too easily made by chance.
- The row under the columns counts the pieces in each column, so after a ten is broken it reads 3 and 12 while the
  number above still reads 42. While each column holds 9 or fewer the row is the two digits, as the glossary's chart
  has them.
- The ones column holds 29 cubes at most: enough for a teen number of ones in 720, for two broken tens, and for the
  ones of two numbers before they are bundled in `adding-tens-and-ones`, at a size a phone shows.
- The written line is "50 + 6 = 56", the kit's form with the answer last. A text may write `56 = 50 + 6` in its own
  words.
- `values: cards` gives section 030 a figure for "43, not 403": two value cards side by side read as heard, and the
  ones card laid over the 0 gives the digits. These are the layered place value cards of the progression.
- `swap` takes the name of `swap` on `counters/bonds`, a button that trades two numbers of the figure: there the two
  parts, here the tens digit and the ones digit.
- `tap` takes the meaning it has on `counters/count` and `counters/bonds`, what a tap on a piece does, and `tag` its
  meaning on `counters/count`, the next number of the count. A rod adds 10, which is counting in tens.
- `build-number` accepts the number only with 9 ones or fewer, since section 030 builds a number as its tens digit
  and ones digit. A reader with 17 ones is told to bundle.
- `show-with-ones` opens with the number in tens and ones and keeps it, as the brief asks. Its notes name the ones
  column, the one count that changes.
- `fill-order` draws one or two missing packs, so the pencils that stand in for them stay within the 29 of the
  ones column, and puts up to 9 extra pencils on the shelf, so the shelf does not hold the answer.
- The jar, the florist and the shop name their tens bundles, bunches and packs, and their ones pencils and roses, as
  the terms' rules keep real tens under their own names. "Single" and "loose" are left out of the names.
- The world looks and goals of `adding-tens-and-ones` are left to that story's design. Its fields that change the
  blocks are fixed here, under the names `counters/add` gives them.
