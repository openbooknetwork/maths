# Stories for the initial release

The first release of the Open Maths Book has 98 stories in three levels. This file describes the two story properties
the release relies on, `level` and `follows`, lists the intermediate and advanced stories, and gives the chains and
the order of release. `specs/beginner-subjects.md` lists the beginner stories.

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

The same topic can have stories at several levels. Coordinates has two stories at the intermediate level, "Finding a
point" and "The coordinate plane", and two for advanced readers, "Polar coordinates" and "Coordinates in space". Each
is a story of its own, with its own id, pages and text. Its title and summary say what it covers.

## The follows property

A story names the story that comes before it on the same topic with `follows`. The end page of a story links to the
story that follows it, as a suggestion for what to read next. One story follows another, so the stories form chains
and a reader always has one next story. `follows` is a kitap feature for every book: a history book uses it to lead
from one war to the next.

Where two stories could both come next, the chains pick an order. "Polar coordinates" follows "The coordinate
plane", and "Coordinates in space" follows "Polar coordinates", because its last two sections build on the polar
grid.

```yaml
id: the-coordinate-plane
level: intermediate
follows: finding-a-point
```

## What a level means in this book

A level says how complex a story's content is, by what it assumes the reader knows. `specs/subject-candidates.md`
gives each subject its level from what school curricula teach.

| Level | Assumes |
|---|---|
| beginner | the beginner stories its plan lists under Needs |
| intermediate | the beginner level |
| advanced | the intermediate level |

## The shape of a story

A story has one page for each distinct step, so a basic subject makes a short story.
Every story follows the same arc:

1. It opens on a real situation that raises the question the story answers.
2. It teaches its ideas in sections. A section shows the idea, lets the reader change something and watch what
   follows, and uses the idea on a new case, in one to three pages.
3. It applies the ideas in its world pages.
4. It sets the reader two or three challenges.
5. Its end page links to the story that follows it.

One page holds one step and one figure, so a long story stays easy to read on a phone. Each page gives the reader
something new to do, and two pages that differ only in their objects or their numbers make one page. Each story's
"Sections" line lists its sections in order.

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

## Order of release

The stories go public one level at a time: beginner first, then intermediate, then advanced. Within a level, a story
goes public after the stories it needs and the story it follows. Each beginner plan lists the stories it needs, and
`specs/beginner-subjects.md` lists the beginner stories in an order that keeps this rule.

## How to read the lists

Each intermediate and advanced story has an id, a title, its sections in order and the real situations its world
pages use. The chains after the lists give the story each one follows, and the last section shows where each
prototype's content goes.

## Beginner

This level has 60 stories. They start from counting, use whole numbers, fractions and decimals to hundredths, and
write an unknown as a box. `specs/beginner-subjects.md` lists them in teaching order with what each one covers and
needs, and `specs/stories/<id>.md` plans each one page by page.

## Intermediate

This level has 22 stories. They use negative numbers, fractions and decimals throughout, write unknowns as letters,
and give the first proofs.

### `negative-numbers` Negative numbers
- Sections: numbers below zero, distance from zero, comparing negative numbers, adding and subtracting across zero,
  multiplying and dividing with signs
- In the world: a thermometer that goes below zero, the floors of a building with basement levels

### `primes-and-factors` Primes and factors
- Sections: factors as rectangles of dots, the sieve of Eratosthenes, prime factors as a tree, greatest common factor,
  least common multiple, remainders
- In the world: two gears and when the same teeth meet again, cicadas that come out every 13 or 17 years

### `powers-and-roots` Powers and roots
- Sections: squares and cubes as shapes, powers of ten, the square root as a side length, negative and zero powers
- In the world: kilobytes, megabytes and gigabytes, writing the distance to the Sun

### `patterns-that-grow` Patterns that grow
- Sections: add the same each time, double each time, square numbers as dots, triangle numbers, the next term
- In the world: saving the same amount each week, a message that doubles each time it is passed on

### `fractions-decimals-percent` Fractions, decimals and percent
- Sections: simplest form, adding with different denominators, multiplying, dividing, one value three ways, percent of
  an amount
- In the world: a 30% discount in a sale, the charge left in a battery

### `ratio-and-proportion` Ratio and proportion
- Sections: a ratio as two bars, scaling a recipe, unit rates, the scale of a map, proportion on a graph as a straight
  line, similar shapes
- In the world: mixing paint to match a colour, speed as distance for each hour

### `solving-equations` Solving equations
- Sections: one step, two steps, x on both sides, negative numbers, brackets, an inequality on a number line
- In the world: two phone plans and the usage where they cost the same, a budget as an inequality

### `number-machines` Number machines
- Sections: a value goes in and a value comes out, the rule inside, guess the rule, two machines in a row
- In the world: the price of any number of tickets, changing money from one currency to another

### `functions` Functions
- Sections: function notation, a rule and its graph, composing two functions, the order matters, undoing a function, one
  machine and a whole list
- In the world: a discount and a tax applied in either order, one formula filled down a spreadsheet column

### `lines-and-their-graphs` Lines and their graphs
- Sections: a table of values, y = mx + c, slope and intercept, parallel and perpendicular lines, where two lines meet
- In the world: a taxi fare with a starting fee, the number of sales where a stall starts to earn

### `finding-a-point` Finding a point
- Sections: a number names a place on a line, two numbers on a grid, reading a point, plotting a point, a treasure map
- In the world: finding a seat in a cinema by row and number, the squares of a city map

### `the-coordinate-plane` The coordinate plane
- Sections: four quadrants, the distance between two points, the midpoint, the slope between two points, shapes from
  their corners
- In the world: where a character stands on a game screen, the straight distance between two places on a map

### `angles-in-polygons` Angles in triangles and polygons
- Sections: a line that crosses two parallel lines, corresponding and alternate angles, the angles of a triangle, the
  angles of a polygon, the angle outside a triangle
- In the world: a road that crosses two parallel railway tracks, cutting the corners of a six-sided picture frame

### `triangles-and-circles` Triangles and circles
- Sections: area of a triangle, Pythagoras, similar triangles, the circle and π, arcs and sectors, quadrilaterals
- In the world: how far a ladder reaches up a wall, the distance a bicycle travels for each turn of its wheel

### `slide-turn-flip` Slide, turn, flip
- Sections: sliding a shape, turning it, flipping it in a mirror line, lines of symmetry, repeating patterns
- In the world: the repeat in wallpaper and floor tiles, the mirrored word on the front of an ambulance

### `moving-shapes-on-a-grid` Moving shapes on a grid
- Sections: translation by a vector, rotation about a point, reflection in a line, enlargement from a centre, one move
  after another
- In the world: a character moving and turning in a video game, zooming a photo without changing its shape

### `boxes-and-cubes` Boxes and cubes
- Sections: filling a box with unit cubes, layers of cubes, length times width times height, unfolding a cube, the
  nets of a box
- In the world: how many boxes fit in a delivery van, a cardboard box cut and folded from one flat sheet

### `solids` Solids
- Sections: prism, cylinder, pyramid, cone, sphere, surface area from a net
- In the world: why drinks come in cylinders, how much water a tank holds

### `chance` Chance
- Sections: certain, likely and impossible, one coin, one die, keeping a tally, many tries
- In the world: what a 70% chance of rain means, why a board game uses dice

### `probability` Probability
- Sections: outcomes and events, two dice, a tree of choices, expected against observed, the law of large numbers
- In the world: the odds of a lottery ticket, why a casino wins over many games

### `statistics` Statistics
- Sections: mean, median and mode, range and spread, histograms, scatter plots and a line of best fit, a sample and the
  whole
- In the world: the average wage and the wage of the person in the middle, a poll that asks a thousand people about
  a country

### `proofs-without-words` Proofs without words
- Sections: the sum of odd numbers, 1 + 2 + ... + n, (a + b)², Pythagoras by rearrangement, the area of a circle
- In the world: counting the cans in a stacked display, the handshakes in a room

## Advanced

This level has 16 stories. They use algebra with letters, treat functions as objects, meet limits, and study
structures beyond numbers.

### `quadratics` Quadratics
- Sections: the parabola, vertex and axis, roots and factors, completing the square as a picture, the discriminant
- In the world: the path of a thrown ball, the curve of a satellite dish

### `exponentials-and-logarithms` Exponentials and logarithms
- Sections: repeated doubling, growth and decay, the number e, the logarithm as the undoing, a logarithmic scale
- In the world: savings with compound interest, the scales for earthquakes and loudness, dating old bones

### `sequences-and-series` Sequences and series
- Sections: arithmetic and geometric sequences, a limit, 1/2 + 1/4 + 1/8 + ... = 1, a series that grows without end,
  compound growth
- In the world: paying back a loan, a medicine building up in the body dose after dose

### `clock-arithmetic` Clock arithmetic
- Sections: remainders as a clock, adding and multiplying on a clock, Euclid's algorithm, when division works, a simple
  cipher
- In the world: the check digit of a barcode, the lock on a private message

### `functions-of-functions` Functions of functions
- Sections: a function as a value, map over a list, filter and fold, a machine that makes machines, composition as a
  machine
- In the world: a photo filter applied to every pixel, a chain of steps that cleans a table of data

### `slopes-and-areas` Slopes and areas
- Sections: the slope between two points, the tangent as a limit, the slope curve, area from rectangles, area and slope
  undo each other
- In the world: a speedometer and a trip meter, each worked out from the other

### `polar-coordinates` Polar coordinates
- Sections: a distance and an angle, the polar grid, converting both ways, degrees and radians, a spiral and a rose
- In the world: a radar screen, the reach of a robot arm

### `coordinates-in-space` Coordinates in space
- Sections: a third axis, distance in space, vectors and their sum, cylindrical coordinates, spherical coordinates
- In the world: latitude, longitude and height for an aircraft, the path of a 3D printer head

### `the-unit-circle-and-waves` The unit circle and waves
- Sections: sine and cosine on the circle, unrolling the circle into a wave, amplitude, frequency and phase, adding
  waves, tangent, radians
- In the world: a musical note as a wave, the height of a seat on a Ferris wheel, the tides

### `compass-and-ruler` Compass and ruler
- Sections: the tools, an equilateral triangle, the perpendicular bisector, bisecting an angle, a regular hexagon
- In the world: a builder marking a right angle with a rope, the star patterns of tiled walls

### `matrices-and-the-plane` Matrices and the plane
- Sections: two arrows rule the plane, a matrix as its columns, rotation, shear and reflection, the determinant as area,
  one transformation after another, undoing one
- In the world: how a game draws a turning object in every frame, straightening a tilted photo

### `sets` Sets
- Sections: a set and its elements, sorting by two rules, union and intersection, difference and complement, subsets,
  counting a union, three sets
- In the world: search filters that use and, or and not, a survey where some people chose two answers

### `sets-and-logic` Sets and logic
- Sections: De Morgan's laws, the power set, pairs and the Cartesian product, and, or and not as sets, matching sets to
  compare their sizes
- In the world: a database query, the logic gates inside a chip

### `counting-without-counting` Counting without counting
- Sections: arrangements, choosing without order, Pascal's triangle, paths on a grid, the binomial expansion
- In the world: how many PINs and passwords there are, the routes through a grid of streets

### `distributions` Distributions
- Sections: the Galton board, the binomial distribution, the bell curve, mean and standard deviation, sampling
- In the world: the heights of people, checking the weight of packets in a factory

### `graph-theory` Graph theory
- Sections: dots and lines, degree and the handshake rule, the bridges of Königsberg, shortest paths, colouring, trees
- In the world: a route planner, friends of friends in a social network, a timetable with no clashes

## Chains

Each row is one chain, in reading order, and every story in it follows the story before it. A beginner story follows
one of the stories its plan lists under Needs. The first column names each chain for this file only. A story in no
chain names its next stories in the text of its end page.

| Topic | Chain |
|---|---|
| Counting, length and area | `counting` → `more-and-less` → `comparing-lengths` → `centimetres-and-metres` → `perimeter` → `area-of-rectangles` |
| Adding and decimals | `number-bonds` → `adding-within-20` → `adding-tens-and-ones` → `money` → `tenths-and-hundredths` → `comparing-decimals` |
| Equations | `equals-sign` → `missing-number` → `solving-equations` → `quadratics` |
| Written methods | `fact-families` → `column-methods` → `long-multiplication` → `written-division` |
| Place value | `tens-and-ones` → `hundreds-and-thousands` → `large-numbers` → `rounding-and-estimating` → `word-problems` |
| Multiplying and dividing | `skip-counting` → `equal-groups` → `times-tables` → `sharing-and-grouping` → `remainders` → `primes-and-factors` → `clock-arithmetic` |
| Order of operations | `any-order` → `order-of-operations` |
| Ratio | `times-as-many` → `ratio-and-proportion` |
| Fractions | `halves-and-quarters` → `unit-fractions` → `fractions-on-a-line` → `equivalent-fractions` → `comparing-fractions` → `fractions-decimals-percent` |
| Negative numbers | `number-line` → `negative-numbers` |
| Powers | `powers-and-roots` → `exponentials-and-logarithms` |
| Patterns | `number-patterns` → `patterns-that-grow` → `sequences-and-series` |
| Time | `telling-the-time` → `time-intervals` |
| Units | `mass` → `converting-units` |
| Coordinates | `position-words` → `finding-a-point` → `the-coordinate-plane` → `polar-coordinates` → `coordinates-in-space` |
| Angles | `turns-and-right-angles` → `angles` → `angles-add-up` → `angles-in-polygons` |
| Triangles and circles | `triangles` → `triangles-and-circles` → `the-unit-circle-and-waves` |
| Polygons | `lines-parallel-perpendicular` → `quadrilaterals-and-polygons` |
| Solids | `flat-shapes` → `solid-shapes` → `boxes-and-cubes` → `solids` |
| Transformations | `slide-turn-flip` → `moving-shapes-on-a-grid` → `matrices-and-the-plane` |
| Functions | `number-machines` → `functions` → `functions-of-functions` |
| Graphs | `lines-and-their-graphs` → `slopes-and-areas` |
| Data | `sorting-and-pictograms` → `bar-charts` → `pie-charts` → `statistics` |
| Chance | `chance` → `probability` → `distributions` |
| Sets | `sets` → `sets-and-logic` |

## Where the prototypes go

The stories in `content/` today are prototypes, built to find out what the engine needs. The release replaces them
with the stories above. Every prototype's content has a place in the release:

| Prototype | Release stories |
|---|---|
| `plane-shapes` | `flat-shapes`, `triangles`, `quadrilaterals-and-polygons`, `triangles-and-circles` |
| `coordinates` | `negative-numbers`, `finding-a-point`, `the-coordinate-plane`, `coordinates-in-space` |
| `polar` | `polar-coordinates`, `coordinates-in-space` |
| `solids` | `solid-shapes`, `boxes-and-cubes`, `solids` |
| `functions` | `number-machines`, `functions`, `functions-of-functions` |
| `sets` | `sets`, `sets-and-logic` |
| `probability` | `chance`, `probability`, `statistics`, `distributions` |
| `calculus` | `lines-and-their-graphs`, `quadratics`, `exponentials-and-logarithms`, `slopes-and-areas` |
| `constructions` | `compass-and-ruler` |
| `equations` | `equals-sign`, `missing-number`, `solving-equations` |
| `transformations` | `slide-turn-flip`, `moving-shapes-on-a-grid`, `matrices-and-the-plane` |
| `graph-theory` | `graph-theory` |
| `proofs` | `angles-in-polygons`, `patterns-that-grow`, `proofs-without-words`, `sequences-and-series` |
| `fractions` | `unit-fractions`, `equivalent-fractions`, `comparing-fractions`, `adding-like-fractions`, `mixed-numbers`, `fractions-decimals-percent`, `ratio-and-proportion` |
| `number-patterns` | `skip-counting`, `primes-and-factors`, `powers-and-roots`, `clock-arithmetic`, `counting-without-counting` |
| `trigonometry` | `the-unit-circle-and-waves` |
