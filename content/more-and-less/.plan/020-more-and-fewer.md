# More and fewer

## Header

- Assumes: the reader counts objects by giving each one number, as the story `counting` teaches. From section
  `matching` the reader knows the pair line, the ring on a counter without a partner, "the same" for two rows
  where every counter has a partner, and that a row spread out keeps its pairs.
- Teaches: the row with counters left over has more, and the number of counters left over is how many more it has
  and how many fewer the other row has.
- Introduces:
  - Terms: more, fewer, "how many more", "how many fewer", and the difference, which is the number that answers
    both questions. Fewer is the word for objects, and less is the word for numbers.
  - Controls: the tags at the ends of the rows that read more, fewer or the same. A tap on a counter left over,
    which gives it the next number. Counters with a plus for the ones the reader added, and empty places for the ones
    the reader took away. The buttons "Stop the music" and "Next round" of the world page.
- Uses:
  - Two rows of 6 and 4 counters, each on a stepper from 0 to 10 (page 210).
  - Rows of 4 and 9, with 5 left over to count (page 230).
  - Rows of 9 and 5, made the same by adding to the 5, by taking from the 9, or by both, 4 steps in all
    (page 240).
  - Musical chairs with 6 players and 5 chairs, down to 1 player (page 610).

Every row holds 10 counters at most. The scene pairs the rows on every page of this section, with `pair: auto`.
The reader paired by hand in section `matching`.

## Content

### 210 The row with counters left over has more

The page gives the three words. When the rows are paired and one row has counters left over, that row has more
and the other row has fewer. When every counter has a partner, the rows have the same. The example is a top row of
6 and a bottom row of 4, where 2 top counters are left over, so the top row has more and the bottom row has fewer.
The text says the comparison both ways, because knowing which row has more also tells which has fewer. It asks the
reader to take counters from the top row until the tags change, and then to go one step further.

One sentence recalls the spread row of section `matching`: the pairs decide which row has more, whatever room a
row takes.

### 230 Count the counters left over

The counters left over answer "how many more". The top row has 4 and the bottom row has 9. The reader counts only
the counters left over, 1 to 5, and leaves the paired ones uncounted. The bottom row has 5 more than the top row,
and the top row has 5 fewer than the bottom row. One count gives both answers.

### 240 How many more, and how many fewer?

The top row has 9 and the bottom row has 5, so the top row has 4 more and the bottom row has 4 fewer. The reader
makes the rows the same. Adding to the bottom row takes 4 counters, and those 4 are how many more the top row had.
Taking from the top row takes 4 counters too, and those 4 are how many fewer the bottom row had. The number that
answers both questions is the difference between the two rows. The page ends with the rule for the two words:
fewer is the word for objects, and less is the word for numbers.

### 610 Musical chairs

Players walk round a row of chairs while music plays. There is one chair fewer than players. When the music stops
each player takes a chair, and the one player left over is out. Then one chair goes too, so the next round again
has one chair fewer than players. The game starts with 6 players and 5 chairs and ends with 1 player, who wins.
The page says that one fewer chair leaves one player without a seat in every round.

## Interactivity

### 210

- Shows: two rows of counters, 6 above 4, with a pair line from each bottom counter to the top counter above it.
  The 2 top counters left over carry the ring of section `matching`. A tag at the end of the top row reads "more"
  and a tag at the end of the bottom row reads "fewer". Two steppers stand in the panel under the figure, labelled
  "Top row" and "Bottom row". The readout "Without a partner" shows 2, the number of counters left over.
- The reader: steps either row up or down.
- The figure: adds or removes the last counter of that row, draws the pairs again and rings the counters left
  over. The tags follow. When every counter has a partner both tags read "the same", and so do rows of 0 and 0.
- Action: change the size of a row, and the figure names the row that has more.

### 230

- Shows: a top row of 4 and a bottom row of 9, paired, with 5 bottom counters left over and ringed. The tags read
  "fewer" and "more". The steppers "Top row" and "Bottom row" stand in the panel under the figure.
- The reader: taps the counters left over, one by one, in any order. The reader can also step a row.
- The figure: gives each tapped counter the next number, as in `counting`. A tap on a paired counter or on a
  numbered one does nothing. When every counter left over has its number, the tags gain the last number said:
  "5 fewer" on the top row and "5 more" on the bottom row. A step of a row takes the numbers off and puts the tags
  back to the plain words.
- Action: tap a counter left over, and it takes the next number.

### 240

- Shows: a top row of 9 and a bottom row of 5, paired, with 4 top counters left over. The tags read "more" and
  "fewer". The steppers "Top row" and "Bottom row" stand in the panel under the figure, and each runs from 5 to
  9. The readouts are Added and Taken away, both at 0.
- The reader: steps the bottom row up, or the top row down.
- The figure: a step up on the bottom row adds a counter marked with a plus, which pairs with a top
  counter that was left over. A step down on the top row takes its last counter and leaves a dashed empty place
  where it stood. A step back undoes either. Added counts the counters with a plus and Taken away counts the empty
  places. The tags read "the same" whenever the rows are equal, which is when Added and Taken away make 4. Past
  that the bottom row has counters left over and the tags trade places.
- Action: add to the shorter row or take from the longer one, and the figure keeps count of each counter added
  and each one taken.

### 610

- Shows: a row of 6 players above a row of 5 chairs. The players sway while the music plays, and stand still for
  a reader who asked for less motion. The readouts are Players and Chairs. One button stands in the panel under
  the figure and reads "Stop the music", "Next round" or "Play again".
- The reader: presses "Stop the music", then "Next round", in turn.
- The figure: on "Stop the music" every chair takes the player above it, a pair line joins them, and the last
  player is ringed as left over. The button turns to "Next round". On "Next round" the ringed player and one
  chair leave, the pair lines go, and the players sway again. With 1 player and 0 chairs the player wears a small
  crown as the winner and the button reads "Play again", which sets 6 players and 5 chairs.
- Action: press a button, and each player takes a chair while the one left over goes out.

## Challenge

The brief gives this section no challenge.

## Contract

The section uses the scene `counters/match`, which `010-matching.md` defines. From that plan it takes `top` and
`bottom` as a number or a stepper, `pair: auto`, the ring on a counter without a partner, the link id `unpaired`
with its label "Without a partner", and the field `word`. The counters left over of this section's texts are the
counters without a partner, so `unpaired` is their number. `top` and `bottom` are link ids on every page of the
scene, with the readout labels "Top row" and "Bottom row". The table lists what this section adds to the scene.

| New in this section | What it draws and does |
|---|---|
| `word: true` `new` | A tag at the end of each row. The row with counters left over reads "more", the other reads "fewer", and both read "the same" when every counter has a partner, rows of 0 and 0 included. The tags stand in place of the words between the rows that `word: same` draws. Link ids `top-word` and `bottom-word` carry the words. Needs `look: rows` and `pair: auto`. |
| `tap: tag` `new` | A tap on a counter left over gives it the next number, from 1. Once each has a number, a `word` tag reads "5 more" or "5 fewer". A step of a row clears the numbers. Link id `counted` is the last number said. Needs `look: rows` and `pair: auto`. |
| `trace: true` `new` | A counter added to a row since the page opened is drawn filled like the others, with a small plus sign on it. A counter taken away leaves a dashed empty place. Link ids `added` and `taken` count them over both rows. Needs `look: rows` and `pair: auto`. |
| `look: chairs` `new` | The top row is players and the bottom row is chairs. `top` is a number from 2 to 10 and `bottom` is `top` less 1. The buttons "Stop the music", "Next round" and "Play again" run the rounds as the Interactivity of 610 says. The readout labels of `top` and `bottom` are "Players" and "Chairs". The players sway while the music plays, and stand still for a reader who asked for less motion. The winner wears a small crown. The look takes no `pair`, `word`, `tap` or `trace`. |

Words the scene needs in `i18n/en.yaml`: the tags "more", "fewer", "the same", "{n} more" and "{n} fewer", the
readout labels "Last number said" for `counted`, "Added" for `added`, "Taken away" for `taken`, "Players" and
"Chairs", and the three buttons of the `chairs` look.

### 210 `the-row-with-counters-left-over-has-more`

Title: "The row with counters left over has more"

```yaml
hesap:
  scene: counters/match
  top: { stepper: [0, 10], start: 6 }
  bottom: { stepper: [0, 10], start: 4 }
  pair: auto
  word: true
  readout: [unpaired]
```

Links: `top-word` starts at "more", `bottom-word` at "fewer", `unpaired` at 2, `top` at 6 and `bottom` at 4.
`unpaired` is the number of counters left over, under the label "Without a partner".

### 230 `count-the-counters-left-over`

Title: "Count the counters left over"

```yaml
hesap:
  scene: counters/match
  top: { stepper: [0, 10], start: 4 }
  bottom: { stepper: [0, 10], start: 9 }
  pair: auto
  word: true
  tap: tag
  readout: [counted]
```

Links: `counted` starts at 0, `top` at 4 and `bottom` at 9. The text leaves `unpaired` unlinked, because it is the
answer the reader counts to.

### 240 `how-many-more-and-how-many-fewer`

Title: "How many more, and how many fewer?"

```yaml
hesap:
  scene: counters/match
  top: { stepper: [5, 9], start: 9 }
  bottom: { stepper: [5, 9], start: 5 }
  pair: auto
  word: true
  trace: true
  readout: [added, taken]
```

Links: `added` starts at 0, `taken` at 0, `top-word` at "more", `bottom-word` at "fewer", `top` at 9 and `bottom`
at 5. The ranges let the top row lose counters and the bottom row gain them, so `added` and `taken` each run from
0 to 4.

### 610 `musical-chairs`

Title: "Musical chairs"

```yaml
hesap:
  scene: counters/match
  look: chairs
  top: 6
  bottom: 5
  readout: [top, bottom]
```

Links: `top` starts at 6 and `bottom` at 5. In every state `bottom` is one less than `top`, from 6 and 5 down to
1 and 0.

## Sources

Curricula, read in `.cache/curricula/`:

- `england-ks1-2.pdf`, Year 1, Number and place value: pupils "use the language of: equal to, more than, less
  than (fewer), most, least". Year 3, Statistics, asks "How many more?" and "How many fewer?" as a pair.
- `japan-course-of-study-2008-en.pdf`, grade 1, Numbers and Calculations (1) a: "To compare numbers of objects in
  groups by making one-to-one correspondence between objects."
- `germany-bremen-primary-2025.pdf`: "Vergleichen von Mengen (z. B. mehr, weniger, gleich viel)".
- `us-common-core-math.pdf`: K.CC.C.6, whether one group is "greater than, less than, or equal to" another, "by
  using matching and counting strategies". 1.OA.A.1, word problems of "comparing, with unknowns in all positions".
  1.MD.C.4, "how many more or less are in one category than in another".

Teaching material, read in `content/more-and-less/.references/`:

- `accessim.org-k-5-grade-1-unit-2-section-c-lesson-12-a-teacher.txt`, Illustrative Mathematics, grade 1, unit 2,
  lesson 12, "How Many More? How Many Fewer?". The lesson asks which amount has more and how many more as separate
  questions, in that order, which is the order of pages 210 and 230. Its first problem is set in a context that
  brings out matching. One method it names is to "match the sets and then count how many don't have a partner",
  which is page 230. Its synthesis names the answer to both questions the difference, and likens the problems to
  thinking "how much more to add", which is the adding of page 240.
- `im.kendallhunt.com-k5-teachers-grade-1-unit-8-lesson-6-lesson.txt`, Illustrative Mathematics, grade 1, unit 8,
  lesson 6. Its synthesis asks "how many more" and "how many fewer" of the same two amounts, as page 240 does.
- `ncetm.org.uk-features-exploring-comparison-in-early-years.txt`, NCETM, "Exploring comparison in Early Years".
  Matching one to one shows the set with one left over has more. "Fewer than" is for countable sets of objects,
  and "less than" for numbers and measures. A comparison is said both ways, as on page 210. Sets with items
  spread far apart "do not always contain more", which page 210 recalls.
- `ncetm.org.uk-media-wvqgcfqm-typical-progression-comparison.txt`, NCETM, Early Years typical progression,
  Comparison. It asks children to turn two unequal groups into two with the same number, as page 240 does.
