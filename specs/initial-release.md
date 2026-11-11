# Stories for the initial release

The first release of the Open Maths Book has 45 stories in three levels. This file lists them with the sections each
one holds, and describes the two story properties the lists rely on, `level` and `follows`.

## What the book is

The Open Maths Book is a reference and a study aid. A reader picks any story at any level, in any order. The site
keeps no account, no progress and no score, and a page starts fresh each time it opens.

## The level property

A story has one level: `beginner`, `intermediate` or `advanced`. It is a property of the story, written in
`story.yaml`:

```yaml
id: coordinates-in-space
title: "Coordinates in space"
level: advanced
```

`level` is a new feature of kitap. A book turns it on by listing its levels in `site.yaml`, in order:

```yaml
levels: [beginner, intermediate, advanced]
```

The main page groups the stories by level, in that order, and a reader can show one level at a time. A book with no
`levels` key, such as a history book, lists its stories as it does today.

A level differs from a tag in two ways. A story has exactly one level and may have many tags. Levels have an order,
and tags have none.

The same topic can have a story at each level. Coordinates has three: "Finding a point" for beginners, "The
coordinate plane" at the intermediate level and "Coordinates in space" for advanced readers. Each is a story of its
own, with its own id, pages and text. Its title and summary say what it covers.

## The follows property

A story names the story that comes before it on the same topic with `follows`. The end page of a story links to the
story that follows it, as a suggestion for what to read next. One story follows another, so the stories form chains
and a reader always has one next story. `follows` is a kitap feature for every book: a history book uses it to lead
from one war to the next.

Where two stories could both come next, the lists pick an order. "Polar coordinates" follows "The coordinate
plane", and "Coordinates in space" follows "Polar coordinates", because its last two sections build on the polar
grid.

```yaml
id: the-coordinate-plane
level: intermediate
follows: finding-a-point
```

## What a level means in this book

A level says how complex a story's content is, by what it assumes the reader knows.

| Level | Assumes |
|---|---|
| beginner | whole numbers and the four operations |
| intermediate | the beginner stories on the same topic |
| advanced | the intermediate stories on the same topic, and algebra with letters |

## The shape of a story

A story has 15 to 20 pages or more, and every story follows the same arc:

1. It opens on a real situation that raises the question the story answers.
2. It teaches its ideas in sections. A section takes about three pages: one that shows the idea, one where the
   reader changes something and watches what follows, and one that uses the idea on a new case.
3. It applies the ideas in its world pages.
4. It sets the reader two or three challenges.
5. Its end page links to the story that follows it.

One page holds one step and one figure, so a long story stays easy to read on a phone. Each story's "Sections" line
lists its sections in order.

## Pages that connect an idea to the world

A story shows where its idea is used. It has at least two pages that start from a real situation, such as a shop, a
map or a game, and let the reader work on it with the idea the story has just taught. They are interactive like every
other page. Each story's "In the world" line names them.

The beginner stories carry most of these pages, because a reader meets each idea there first. A story further along
a chain uses different situations from the stories before it, chosen for the ideas it adds. "Number machines" prices
tickets and changes money. "Functions" adds composition, so it applies a discount and a tax in either order.

## How the text is written

Every sentence has a subject and a verb. A colon introduces a list or a formula. The text does not join a fragment to
a conclusion with a colon or a dash, as in "Two sliders, one point: the grid follows", and a paragraph does not open
with a verbless phrase.

## Challenges

A challenge page gives the reader a goal to reach with the figure, such as "make A ∩ B = {2, 4}", and says when the
goal is reached. The challenges come after the world pages and use the controls the story has already taught. The
first needs one idea from the story and the last combines several.

The page shows a tick when the goal holds and clears it when the reader changes the figure so that it no longer
holds. A challenge page leaves out the readouts that would give its answer away.

A reader reaches a challenge by knowing, and trial alone does not get there. Where a figure would let the reader add
one piece at a time until the tick shows, the reader sets an answer and then commits it, with a button such as
Check or "Lift the cup". A wrong answer says in which direction it is off, and a change takes the check back.

A reader cannot predict a challenge. The page declares its goal and what the engine draws for it, and the engine
draws it when the page opens, so a reader who comes back finds a new one. An "Another one" button on the page draws
again, and the figure starts afresh with each draw.

What is drawn depends on the subject. An arithmetic challenge draws its numbers from a range, such as "a sum from
11 to 18 of two numbers below 10". A geometry challenge draws a shape or a target measure, a sets challenge draws
the elements and the condition, and a graph challenge draws the curve. A title that names a drawn value, such as
"Draw a line 7 cm long", shows the value of the current draw.

The engine draws only a target that the page's controls can reach and that the page does not hold as it opens. A
goal names the function that draws its targets, next to the function that tests them, and `kitap check` fails a
page whose ranges leave the goal nothing to draw.

## Release waves

The stories are released one level at a time:

1. The 15 beginner stories.
2. The 16 intermediate stories.
3. The 14 advanced stories.

## How to read the lists

Each story has an id, a title, its sections in order, the real situations its world pages use, and the story it follows
where it has one. The table after the
lists shows how the stories line up across levels, and the last section shows where each prototype's content goes.

## Beginner

This level has 15 stories. They start from pictures, use whole numbers and simple fractions, and write an unknown as
a box.

### `numbers-on-a-line` Numbers on a line
- Sections: counting along a line, steps forward and back, numbers below zero, distance from zero, comparing two numbers
- In the world: a thermometer that goes below zero, the floors of a building with basement levels

### `parts-of-a-whole` Parts of a whole
- Sections: equal parts, numerator and denominator, the same amount with different names, comparing fractions, adding
  parts of the same size
- In the world: sharing a pizza fairly, the measuring cups of a recipe

### `the-hundred-square` The hundred square
- Sections: skip counting, multiples, factors as rectangles of dots, odd and even, the first primes
- In the world: packing eggs into boxes of six, a calendar where the same weekday comes back every seven days

### `flat-shapes` Flat shapes
- Sections: sides and corners, triangles, rectangles and squares, the circle, perimeter, area by counting squares
- In the world: the shapes of road signs and what each one tells a driver, tiling a floor with no gaps

### `angles` Angles
- Sections: an angle as a turn, right angles, sharper and wider, measuring in degrees, the angles of a triangle
- In the world: the hands of a clock, how steep a wheelchair ramp may be

### `finding-a-point` Finding a point
- Sections: a number names a place on a line, two numbers on a grid, reading a point, plotting a point, a treasure map
- In the world: finding a seat in a cinema by row and number, the squares of a city map

### `boxes-and-cubes` Boxes and cubes
- Sections: faces, edges and corners, a cube, a box, filling a box with unit cubes, unfolding a cube
- In the world: how many boxes fit in a delivery van, a cardboard box cut and folded from one flat sheet

### `sorting-into-sets` Sorting into sets
- Sections: a set and its elements, in or out, two sets that overlap, sorting by two rules
- In the world: sorting rubbish for recycling, filtering songs that are both liked and new

### `number-machines` Number machines
- Sections: a value goes in and a value comes out, the rule inside, guess the rule, two machines in a row
- In the world: the price of any number of tickets, changing money from one currency to another

### `slide-turn-flip` Slide, turn, flip
- Sections: sliding a shape, turning it, flipping it in a mirror line, lines of symmetry, repeating patterns
- In the world: the repeat in wallpaper and floor tiles, the mirrored word on the front of an ambulance

### `the-missing-number` The missing number
- Sections: a balance, a box that hides a number, take the same from both sides, share both sides equally
- In the world: working out the change in a shop, splitting a bill between friends

### `chance` Chance
- Sections: certain, likely and impossible, one coin, one die, keeping a tally, many tries
- In the world: what a 70% chance of rain means, why a board game uses dice

### `counting-and-charts` Counting and charts
- Sections: a tally, a bar chart, the most common value, the middle value, reading a chart
- In the world: a class survey of favourite fruit, the steps a phone counts each day

### `patterns-that-grow` Patterns that grow
- Sections: add the same each time, double each time, square numbers as dots, triangle numbers, the next term
- In the world: saving the same amount each week, a message that doubles each time it is passed on

### `measuring` Measuring
- Sections: length and units, perimeter of a room, area of a floor, time on a clock face, scale on a map
- In the world: every page starts from a real task, such as a room, a floor, a clock or a map

## Intermediate

This level has 16 stories. They use negative numbers, fractions and decimals throughout, write unknowns as letters,
and give the first proofs.

### `fractions-decimals-percent` Fractions, decimals and percent
- Sections: simplest form, adding with different denominators, multiplying, dividing, one value three ways, percent of
  an amount
- In the world: a 30% discount in a sale, the charge left in a battery

### `ratio-and-proportion` Ratio and proportion
- Sections: a ratio as two bars, scaling a recipe, unit rates, proportion on a graph as a straight line, similar shapes
- In the world: mixing paint to match a colour, speed as distance for each hour

### `primes-and-factors` Primes and factors
- Sections: the sieve of Eratosthenes, prime factors as a tree, greatest common factor, least common multiple,
  remainders
- In the world: two gears and when the same teeth meet again, cicadas that come out every 13 or 17 years

### `powers-and-roots` Powers and roots
- Sections: squares and cubes as shapes, powers of ten, the square root as a side length, negative and zero powers
- In the world: kilobytes, megabytes and gigabytes, writing the distance to the Sun

### `solving-equations` Solving equations
- Sections: one step, two steps, x on both sides, negative numbers, brackets, an inequality on a number line
- In the world: two phone plans and the usage where they cost the same, a budget as an inequality

### `the-coordinate-plane` The coordinate plane
- Sections: four quadrants, the distance between two points, the midpoint, the slope between two points, shapes from
  their corners
- In the world: where a character stands on a game screen, the straight distance between two places on a map
- Follows: `finding-a-point`

### `lines-and-their-graphs` Lines and their graphs
- Sections: a table of values, y = mx + c, slope and intercept, parallel and perpendicular lines, where two lines meet
- In the world: a taxi fare with a starting fee, the number of sales where a stall starts to earn

### `functions` Functions
- Sections: function notation, a rule and its graph, composing two functions, the order matters, undoing a function, one
  machine and a whole list
- In the world: a discount and a tax applied in either order, one formula filled down a spreadsheet column
- Follows: `number-machines`

### `triangles-and-circles` Triangles and circles
- Sections: area of a triangle, Pythagoras, similar triangles, the circle and π, arcs and sectors, quadrilaterals
- In the world: how far a ladder reaches up a wall, the distance a bicycle travels for each turn of its wheel
- Follows: `flat-shapes`

### `compass-and-ruler` Compass and ruler
- Sections: the tools, an equilateral triangle, the perpendicular bisector, bisecting an angle, a regular hexagon
- In the world: a builder marking a right angle with a rope, the star patterns of tiled walls

### `moving-shapes-on-a-grid` Moving shapes on a grid
- Sections: translation by a vector, rotation about a point, reflection in a line, enlargement from a centre, one move
  after another
- In the world: a character moving and turning in a video game, zooming a photo without changing its shape
- Follows: `slide-turn-flip`

### `solids` Solids
- Sections: prism, cylinder, pyramid, cone, sphere, surface area from a net
- In the world: why drinks come in cylinders, how much water a tank holds
- Follows: `boxes-and-cubes`

### `sets` Sets
- Sections: union and intersection, difference and complement, subsets, counting a union, three sets
- In the world: search filters that use and, or and not, a survey where some people chose two answers
- Follows: `sorting-into-sets`

### `probability` Probability
- Sections: outcomes and events, two dice, a tree of choices, expected against observed, the law of large numbers
- In the world: the odds of a lottery ticket, why a casino wins over many games
- Follows: `chance`

### `statistics` Statistics
- Sections: mean, median and mode, range and spread, histograms, scatter plots and a line of best fit, a sample and the
  whole
- In the world: the average wage and the wage of the person in the middle, a poll that asks a thousand people about
  a country
- Follows: `counting-and-charts`

### `proofs-without-words` Proofs without words
- Sections: the sum of odd numbers, 1 + 2 + ... + n, (a + b)², Pythagoras by rearrangement, the area of a circle
- In the world: counting the cans in a stacked display, the handshakes in a room

## Advanced

This level has 14 stories. They use algebra with letters, treat functions as objects, meet limits, and study
structures beyond numbers.

### `quadratics` Quadratics
- Sections: the parabola, vertex and axis, roots and factors, completing the square as a picture, the discriminant
- In the world: the path of a thrown ball, the curve of a satellite dish

### `exponentials-and-logarithms` Exponentials and logarithms
- Sections: repeated doubling, growth and decay, the number e, the logarithm as the undoing, a logarithmic scale
- In the world: savings with compound interest, the scales for earthquakes and loudness, dating old bones

### `the-unit-circle-and-waves` The unit circle and waves
- Sections: sine and cosine on the circle, unrolling the circle into a wave, amplitude, frequency and phase, adding
  waves, tangent, radians
- In the world: a musical note as a wave, the height of a seat on a Ferris wheel, the tides

### `polar-coordinates` Polar coordinates
- Sections: a distance and an angle, the polar grid, converting both ways, degrees and radians, a spiral and a rose
- In the world: a radar screen, the reach of a robot arm
- Follows: `the-coordinate-plane`

### `coordinates-in-space` Coordinates in space
- Sections: a third axis, distance in space, vectors and their sum, cylindrical coordinates, spherical coordinates
- In the world: latitude, longitude and height for an aircraft, the path of a 3D printer head
- Follows: `polar-coordinates`

### `matrices-and-the-plane` Matrices and the plane
- Sections: two arrows rule the plane, a matrix as its columns, rotation, shear and reflection, the determinant as area,
  one transformation after another, undoing one
- In the world: how a game draws a turning object in every frame, straightening a tilted photo
- Follows: `moving-shapes-on-a-grid`

### `slopes-and-areas` Slopes and areas
- Sections: the slope between two points, the tangent as a limit, the slope curve, area from rectangles, area and slope
  undo each other
- In the world: a speedometer and a trip meter, each worked out from the other
- Follows: `lines-and-their-graphs`

### `sequences-and-series` Sequences and series
- Sections: arithmetic and geometric sequences, a limit, 1/2 + 1/4 + 1/8 + ... = 1, a series that grows without end,
  compound growth
- In the world: paying back a loan, a medicine building up in the body dose after dose
- Follows: `patterns-that-grow`

### `functions-of-functions` Functions of functions
- Sections: a function as a value, map over a list, filter and fold, a machine that makes machines, composition as a
  machine
- In the world: a photo filter applied to every pixel, a chain of steps that cleans a table of data
- Follows: `functions`

### `counting-without-counting` Counting without counting
- Sections: arrangements, choosing without order, Pascal's triangle, paths on a grid, the binomial expansion
- In the world: how many PINs and passwords there are, the routes through a grid of streets

### `distributions` Distributions
- Sections: the Galton board, the binomial distribution, the bell curve, mean and standard deviation, sampling
- In the world: the heights of people, checking the weight of packets in a factory
- Follows: `probability`

### `graph-theory` Graph theory
- Sections: dots and lines, degree and the handshake rule, the bridges of Königsberg, shortest paths, colouring, trees
- In the world: a route planner, friends of friends in a social network, a timetable with no clashes

### `sets-and-logic` Sets and logic
- Sections: De Morgan's laws, the power set, pairs and the Cartesian product, and, or and not as sets, matching sets to
  compare their sizes
- In the world: a database query, the logic gates inside a chip
- Follows: `sets`

### `clock-arithmetic` Clock arithmetic
- Sections: remainders as a clock, adding and multiplying on a clock, Euclid's algorithm, when division works, a simple
  cipher
- In the world: the check digit of a barcode, the lock on a private message
- Follows: `primes-and-factors`

## The stories side by side

The first column groups the stories for this file only. A story carries no such field.

| Topic | Beginner | Intermediate | Advanced |
|---|---|---|---|
| Number | `numbers-on-a-line`, `the-hundred-square` | `primes-and-factors`, `powers-and-roots` | `clock-arithmetic` |
| Fractions and ratio | `parts-of-a-whole` | `fractions-decimals-percent`, `ratio-and-proportion` | |
| Algebra | `the-missing-number` | `solving-equations` | `quadratics`, `exponentials-and-logarithms` |
| Functions | `number-machines` | `functions`, `lines-and-their-graphs` | `functions-of-functions`, `slopes-and-areas` |
| Coordinates | `finding-a-point` | `the-coordinate-plane` | `polar-coordinates`, `coordinates-in-space` |
| Plane geometry | `flat-shapes`, `angles`, `measuring` | `triangles-and-circles`, `compass-and-ruler` | `the-unit-circle-and-waves` |
| Transformations | `slide-turn-flip` | `moving-shapes-on-a-grid` | `matrices-and-the-plane` |
| Solids | `boxes-and-cubes` | `solids` | |
| Sets and logic | `sorting-into-sets` | `sets` | `sets-and-logic` |
| Chance and data | `chance`, `counting-and-charts` | `probability`, `statistics` | `distributions`, `counting-without-counting` |
| Patterns and proof | `patterns-that-grow` | `proofs-without-words` | `sequences-and-series` |
| Networks | | | `graph-theory` |

## Where the prototypes go

The stories in `content/` today are prototypes, built to find out what the engine needs. The release replaces them
with the stories above. Every prototype's content has a place in the lists:

| Prototype | Release stories |
|---|---|
| `plane-shapes` | `flat-shapes`, `triangles-and-circles` |
| `coordinates` | `numbers-on-a-line`, `finding-a-point`, `the-coordinate-plane`, `coordinates-in-space` |
| `polar` | `polar-coordinates`, `coordinates-in-space` |
| `solids` | `boxes-and-cubes`, `solids` |
| `functions` | `number-machines`, `functions`, `functions-of-functions` |
| `sets` | `sorting-into-sets`, `sets`, `sets-and-logic` |
| `probability` | `chance`, `counting-and-charts`, `probability`, `statistics`, `distributions` |
| `calculus` | `lines-and-their-graphs`, `quadratics`, `exponentials-and-logarithms`, `slopes-and-areas` |
| `constructions` | `compass-and-ruler` |
| `equations` | `the-missing-number`, `solving-equations` |
| `transformations` | `slide-turn-flip`, `moving-shapes-on-a-grid`, `matrices-and-the-plane` |
| `graph-theory` | `graph-theory` |
| `proofs` | `angles`, `patterns-that-grow`, `proofs-without-words`, `sequences-and-series` |
| `fractions` | `parts-of-a-whole`, `fractions-decimals-percent`, `ratio-and-proportion` |
| `number-patterns` | `the-hundred-square`, `primes-and-factors`, `powers-and-roots`, `clock-arithmetic`, `counting-without-counting` |
| `trigonometry` | `the-unit-circle-and-waves` |

`measuring` is the one release story with no prototype behind it.

## Open question

Which engine the release stories run on. It is decided once the prototype builds are done.
