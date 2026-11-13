# Subject candidates from school curricula

This file lists the subjects that school curricula teach, as candidates for the first stories, and gives each one a
level. `specs/initial-release.md` holds the release plan, and the last column below names the stories there that
cover a subject.

## How a level is decided

A subject takes the level of the curriculum that teaches it last. A subject that Japan teaches in primary school and
Turkey in middle school is intermediate. This way no reader meets a subject at a level below the one their own
school gave it.

| Level | Rule |
|---|---|
| `beginner` | every curriculum teaches it by the end of grade 5 |
| `intermediate` | the latest curriculum teaches it in grades 6 to 9 |
| `advanced` | one curriculum or more leaves it for after grade 9 |

Grades are counted by age, so that the curricula line up. England's Year 6 is grade 5, and Japan's grade 6 counts as
grade 6 although it is the last year of primary school there.

A subject splits where its parts land at different levels. Adding fractions with the same denominator is beginner,
and adding fractions with different denominators is intermediate.

A curriculum has a say on a subject when its document states where the subject is taught. A subject that a document
does not mention gets no vote from it.

A level says what a story assumes the reader knows. It names no age and no school year.

## Where the placements come from

Each placement was checked against the documents in `.cache/curricula/`, which `scripts/fetch-curricula.mjs`
downloads.

| Curriculum | Document | What it settles |
|---|---|---|
| England | programmes of study, key stages 1 to 3 | the year of each subject to Y6, key stage 3 as one block |
| Japan | Course of Study of 2008 in English, TIMSS 2023 chapter | the grade of each subject |
| United States | Common Core standards | the grade and the standard code of each subject |
| Turkey | programme for grades 5 to 8 | the grade of each subject from grade 5 |
| Singapore, Korea | TIMSS country chapters | primary or lower secondary, no single grade |
| Finland | TIMSS 2019 chapter | the grade band of each subject |
| France | Eduscol cycle 4, geometry | geometry only |
| Germany | Bremen plan for years 1 to 4 | primary only |
| China | a commentary on the 2022 standards | what changed in 2022 |

England, Japan, the United States and Turkey decide most levels, because their documents give a grade for each
subject. The column "Latest in" names the curriculum that sets the level.

## Beginner: first ideas

The beginner tables give the 23 headings of the level. `specs/beginner-subjects.md` splits them into the 60
subjects that each make one story, and `specs/stories/` holds the plan of each story.

Every curriculum teaches these by the end of grade 2. They need nothing before them.

| # | Subject | What it covers | Needs | Latest in | Stories |
|---|---|---|---|---|---|
| 1 | Counting and comparing | counting objects, more and less, order, the number line | | all grade 1 | `counting`, `more-and-less`, `number-line` |
| 2 | Place value | ones, tens and hundreds as groups | 1 | Japan G2 | `tens-and-ones`, `hundreds-and-thousands`, `ten-times-the-place` |
| 3 | Adding and subtracting | joining and taking away, number bonds | 1 | all grade 1 | `number-bonds`, `adding-within-20`, `fact-families`, `adding-tens-and-ones` |
| 4 | Number patterns | skip counting, patterns that repeat and grow | 1 | Japan G2 | `skip-counting`, `number-patterns` |
| 5 | Halves and quarters | equal parts of a shape and of a set | 1 | Japan G2 | `halves-and-quarters` |
| 6 | Measuring | length, mass and capacity in standard units | 1 | US G2 | `comparing-lengths`, `centimetres-and-metres`, `mass`, `capacity`, `converting-units` |
| 7 | Time and money | clocks, the calendar, durations, coins and change | 3 | US G2 | `telling-the-time`, `the-calendar`, `time-intervals`, `money` |
| 8 | Flat and solid shapes | names, sides, corners, faces, edges | | Japan G2 | `flat-shapes`, `solid-shapes` |
| 9 | Position and direction | left and right, turns, routes | | England Y2 | `position-words`, `turns-and-right-angles` |
| 10 | Counting and charts | tally charts, pictograms, bar charts | 1 | Japan G3 for bar charts | `sorting-and-pictograms`, `bar-charts` |

## Beginner: building on the first ideas

Every curriculum teaches these by the end of grade 5.

| # | Subject | What it covers | Needs | Latest in | Stories |
|---|---|---|---|---|---|
| 11 | Multiplying | equal groups, arrays, the times tables | 3 | US G3 | `equal-groups`, `times-tables`, `any-order`, `times-as-many` |
| 12 | Dividing | sharing, grouping, remainders | 11 | Japan G3, US G3 | `sharing-and-grouping`, `remainders` |
| 13 | Large numbers and rounding | thousands to millions, rounding, estimating | 2 | Japan G4 | `large-numbers`, `rounding-and-estimating` |
| 14 | Written methods | adding and subtracting in columns, long multiplication, long division | 2, 11, 12 | England Y6, US G5 | `column-methods`, `long-multiplication`, `written-division` |
| 15 | Order of operations | brackets, multiplying before adding | 11 | England Y6, US G5 | `order-of-operations` |
| 16 | The missing number | an unknown written as a box | 3 | Japan G3, US G3 | `equals-sign`, `missing-number`, `word-problems` |
| 17 | Equivalent fractions | fractions of the same value, simplifying, fractions on the number line | 5 | Japan G5, Turkey G5 | `unit-fractions`, `fractions-on-a-line`, `equivalent-fractions`, `comparing-fractions`, `mixed-numbers` |
| 18 | Adding fractions with the same denominator | thirds plus thirds | 5 | US G4 | `adding-like-fractions` |
| 19 | Decimals | tenths and hundredths, reading and comparing them | 2, 5 | Turkey G5 | `tenths-and-hundredths`, `comparing-decimals` |
| 20 | Perimeter and area of rectangles | distance round a shape, unit squares, length times width | 11, 6 | Turkey G5 | `perimeter`, `area-by-counting-squares`, `area-of-rectangles` |
| 21 | Angles | turns, degrees, acute and obtuse | 8 | England Y5, Turkey G5 | `angles`, `angles-add-up` |
| 22 | Triangles and quadrilaterals | sorting by sides and angles, parallel and perpendicular lines | 21 | Turkey G5 | `triangles`, `quadrilaterals-and-polygons`, `lines-parallel-perpendicular` |
| 23 | Pie charts | parts of a whole as slices of a circle | 10 | England Y6, Japan G5, Turkey G5 | `pie-charts` |

## Intermediate

The latest curriculum teaches these in grades 6 to 9. The first seventeen are primary school subjects in some
countries, and one curriculum moves each of them up.

| # | Subject | What it covers | Needs | Latest in | Stories |
|---|---|---|---|---|---|
| 24 | Factors, multiples and primes | divisibility, prime numbers, common factors and multiples | 11 | Turkey G6 | `primes-and-factors` |
| 25 | Adding fractions with different denominators | a common denominator | 17, 18, 24 | Turkey G6 | new |
| 26 | Multiplying fractions | a fraction of a quantity, fraction times fraction | 17 | Japan G6, Turkey G6 | new |
| 27 | Dividing by a fraction | how many thirds fit in two | 26 | England Y7 to Y9, US G6 | new |
| 28 | Decimal arithmetic | thousandths, rounding and ordering decimals, the four operations with decimals | 19, 14 | Turkey G6 | `fractions-decimals-percent` |
| 29 | Percentages | per hundred, a percent of a quantity, links to fractions and decimals | 17, 19 | US G6 | `fractions-decimals-percent` |
| 30 | The mean and line graphs | the fair share average, change over time on a graph | 12, 10 | US G6 for the mean, Turkey G7 for line graphs | `statistics` in part |
| 31 | Ratio | a to b, sharing in a ratio, scale on a map | 26 | Turkey G7 | `ratio-and-proportion` |
| 32 | Rate and speed | a quantity per unit, distance and time | 31 | England Y7 to Y9 | new |
| 33 | Letters for numbers | an unknown as a letter, simple formulas | 16, 15 | Japan G6, US G6, Turkey G6 | `solving-equations` in part |
| 34 | Counting outcomes | listing every case in order | 11 | US G7 | `chance` |
| 35 | Area of triangles and parallelograms | cutting a shape and moving the piece to make a rectangle | 20 | US G6, Turkey G6 | `triangles-and-circles` in part |
| 36 | Circumference and area of a circle | π, C = 2πr, A = πr² | 28, 35 | England Y7 to Y9, US G7 | `triangles-and-circles` |
| 37 | Line symmetry | mirror lines | 8 | Turkey G7 | `slide-turn-flip` |
| 38 | Volume and nets | unit cubes, the volume of a box, unfolding a solid | 20 | Turkey G7 | `boxes-and-cubes` |
| 39 | Coordinates | plotting a point as (x, y) | 1 | Turkey G8 | `finding-a-point` |
| 40 | Negative numbers | numbers below zero on a line, the four operations with signs | 1, 3 | Japan G7, Turkey G7 | `negative-numbers` |
| 41 | Powers and roots | squares, cubes, integer exponents, square roots | 11 | Japan G9 | `powers-and-roots` |
| 42 | Rational and irrational numbers | fractions as decimals that end or repeat, numbers such as √2 that do neither | 28, 41 | Japan G9 | new |
| 43 | Approximation | significant figures, the error in a rounded value | 13 | Japan G7 | new |
| 44 | Algebraic expressions | like terms, substituting, expanding brackets | 33 | Japan G7, Turkey G7 | new |
| 45 | Linear equations | solving ax + b = c by keeping a balance | 44 | Japan G7, Turkey G7 | `solving-equations` |
| 46 | Proportion | direct and inverse proportion, percentage change | 31, 29 | US G7, Turkey G7 | `ratio-and-proportion` |
| 47 | The coordinate plane | four quadrants, negative coordinates | 39, 40 | Turkey G8 | `the-coordinate-plane` |
| 48 | Functions | input and output, the graph of a rule | 46, 47 | US G8, Turkey G8 | `functions` |
| 49 | Lines and their graphs | slope, intercept, y = mx + c | 48 | Japan G8, US G8 | `lines-and-their-graphs` |
| 50 | Two equations and two lines | a pair of equations solved by where their lines cross | 45, 49 | Japan G8, US G8 | new |
| 51 | Angles in triangles and with parallel lines | the angle sum of a triangle, corresponding and alternate angles, polygons | 21 | Japan G8, US G8 | `angles-in-polygons` |
| 52 | Transformations | translating, reflecting and rotating on a grid | 37, 47 | US G8 | `moving-shapes-on-a-grid` |
| 53 | Congruence and similarity | when two triangles match, scale factor, similar triangles | 22 | Japan G9 | `triangles-and-circles` in part |
| 54 | The Pythagorean theorem | a² + b² = c², a proof, distances | 41, 35 | Japan G9 | `proofs-without-words` in part |
| 55 | Prisms and cylinders | surface area, volume, views and cross-sections | 38, 36 | Turkey G8 | `solids` |
| 56 | Arcs and sectors | the length of an arc, the area of a sector | 36 | Japan G7, Turkey G7 | new |
| 57 | Statistics | samples, frequency tables, median, mode, range | 30 | US G7 | `statistics` |
| 58 | Probability | equally likely outcomes, relative frequency, two events with tables and trees | 34, 26 | Japan G8 | `probability` |
| 59 | Proof and reasoning | a chain of reasons from what is known to what follows, in geometry and with numbers | 44, 51 | Japan G8 | `proofs-without-words` |

## Advanced: one curriculum or more leaves it for later

Other curricula teach these in middle school. The rule puts them at the advanced level.

| Subject | Left for later by | Taught by grade 9 in | Stories |
|---|---|---|---|
| Quadratic equations | US, England, Turkey | Japan, China, Singapore, Korea | `quadratics` |
| Quadratic functions and their graphs | US, Turkey | England, Japan, Korea, Singapore, Finland, China | `quadratics` |
| Trigonometry of right triangles | Japan, US, Turkey | England, France, China, Finland, Singapore, Korea | new |
| Circle theorems | England, US, Turkey | Japan, China, Finland, Korea | new |
| Solving two equations by algebra | England, Turkey | Japan, US, Singapore | new |
| Ruler and compass constructions | US | Japan, China, England, France, Singapore, Turkey, Finland, Korea | `compass-and-ruler` |
| Volume of cones and spheres | England, Turkey | Japan, US, Finland | `solids` in part |
| Box plots and histograms | England, Turkey | US, Japan, China | `statistics` in part |
| Scatter plots | Japan, Turkey | England, US, Korea | `statistics` in part |
| Standard form | Turkey | England, US | `powers-and-roots` in part |
| Factorising | Turkey | Japan, England, Singapore | new |
| Sets and Venn diagrams | Japan, US, Turkey | England | `sets` |
| The rule for the nth term of a sequence | Japan, US | England | `sequences-and-series` in part |

## Advanced: every curriculum leaves it for later

Logarithms, exponential functions, calculus, vectors, matrices, complex numbers, radians and the graphs of sine and
cosine, the sine and cosine rules, series, probability distributions and proof by induction.

## What the release plan still lacks

- Four intermediate subjects have no story: rational and irrational numbers, approximation, algebraic expressions and
  line graphs.
- Six intermediate subjects are sections of a story and have no story of their own: the three fraction arithmetic
  subjects in `fractions-decimals-percent`, rate and speed in `ratio-and-proportion`, two equations and two lines in
  `lines-and-their-graphs`, and arcs and sectors in `triangles-and-circles`.
- Three intermediate stories hold a part that the rule puts at the advanced level: histograms and scatter plots in
  `statistics`, the volume of cones and spheres in `solids`, and standard form in `powers-and-roots`.
- Four advanced subjects have no story: the trigonometry of right triangles, circle theorems, solving two equations
  by algebra, and factorising.
- Three advanced subjects that every curriculum leaves for later have no story: complex numbers, the sine and cosine
  rules, and proof by induction.

## Levels that rest on one curriculum

One curriculum alone sets each of these levels. A different rule, such as the level where most curricula teach a
subject, would move them down.

| Subject | Level by the rule | Set by | Level in most curricula |
|---|---|---|---|
| Ruler and compass constructions | advanced | US | intermediate |
| Factorising | advanced | Turkey, where the programme does not show it | intermediate |
| Standard form | advanced | Turkey | intermediate |
| Coordinates | intermediate | Japan and Turkey | beginner in England and the US |
| Line symmetry | intermediate | Japan and Turkey | beginner in England and the US |
| Percentages | intermediate | US | beginner |
| Factors, multiples and primes | intermediate | Turkey | beginner |

## What the check could not settle

- Singapore and Korea are read from summaries that say primary or lower secondary, with no single grade.
- The Turkish programme starts at grade 5. A subject it first shows in grade 6 or later may have a simpler form in
  grades 1 to 4, which is unread.
- Japan is read from the 2008 Course of Study. The 2017 changes are known for grades 4 and 8 only.
- England's key stage 3 covers three years as one block.
- France is read for geometry only, Germany for primary only, and China for the 2022 changes only.
