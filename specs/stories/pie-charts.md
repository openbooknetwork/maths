# `pie-charts` Pie charts

- Level: beginner, building on the first ideas
- Needs: `bar-charts`, `comparing-fractions`
- Leads to: no beginner story. The end page points to the intermediate statistics story.
- Sections: the whole circle is everyone, one slice is a fraction, slices that join, comparing slices, a pie chart
  beside a bar chart
- In the world: how the hours of one day are spent, the weather over twelve days
- Figure: a circle cut into equal slices, one for each answer, each slice coloured by its answer so the slices of
  one colour sit together. The reader taps a slice to change its answer, steps the number of answers, or drags the
  edge between two colours, which snaps to the slice lines.
- Engine: new family `chart`, shared with `sorting-and-pictograms` and `bar-charts`. This story needs its scene
  `pie`: a circle of 2 to 12 equal slices (24 for the day page, dragged only), slices tapped to change colour, edges
  dragged between colours, a fraction label for each colour as a count of slices, such as 2/8, and as a half,
  a quarter, a third, a sixth or an eighth where the count makes one, an optional line across the circle at one
  half, the slice lines shown or hidden, and a linked
  `bars` chart of the same counts. `parts` `shade` draws a pie for one fraction but holds one colour, so it does not
  cover several answers.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | What part of the group chose juice | opening | A bar chart of what 8 friends chose to drink: juice, water and tea. | Drags the juice bar up and down. | A bar chart tells how many chose juice, and it does not show at a glance what part of the group that is. |
| 2 | The whole circle is everyone | idea | A circle cut into 8 equal slices, one for each friend, coloured by drink. | Taps a slice to change that friend's drink and watches the colours regroup. | A pie chart gives the whole circle to the whole group and one equal slice to each answer. |
| 3 | More answers make thinner slices | try | The same pie with a stepper for the number of answers, from 2 to 12. | Steps the number up and down. | The circle stays the same size, so each slice gets thinner as more answers share it. |
| 4 | Colour the pie from a tally | use | A tally of 6 answers to which sport to watch and a pie of 6 blank slices. | Taps slices to colour them until the pie matches the tally. | Each mark in the tally becomes one slice in the pie. |
| 5 | One slice of eight is one eighth | idea | A pie of 8 slices where one slice has a colour of its own, with its fraction beside it. | Taps a different slice to give it the colour and watches the fraction stay one eighth. | One slice of 8 equal slices is one eighth of the circle, wherever it sits. |
| 6 | Slices of one colour join up | try | A pie of 8 slices with a stepper for how many are juice. | Steps the juice count and watches its fraction read 1/8, 2/8, 3/8 and on. | The slices of one colour make a fraction with their count on top and the 8 slices of the whole below. |
| 7 | Half the circle is half the group | use | A pie of 8 slices with an edge between two colours. | Drags the edge until one colour fills half the circle. | Four slices of eight fill half the circle, so 4/8 is one half. |
| 8 | Two eighths make a quarter | idea | A pie of 8 slices with two juice slices and a switch that hides the slice lines. | Turns the slice lines off and on. | Without the lines two eighths look like one quarter, because 2/8 and 1/4 are the same part. |
| 9 | Find a third in six or twelve | try | A pie with a choice of 6 or 12 slices and an edge between two colours. | Drags the edge until one colour fills a third of the circle, then switches the slice count and does it again. | A third of the circle is 2 slices of 6 and 4 slices of 12. |
| 10 | A bigger slice is a bigger part | idea | A pie of 12 slices in two colours. | Drags the edge between the colours and watches both fractions change. | The colour with more slices of the same size has the larger fraction. |
| 11 | More or less than half | try | A pie of 8 slices in three colours with a line across the circle at one half. | Drags the edges and watches which colours pass the half line. | A colour past the half line is more than half the group, and only one colour can be. |
| 12 | Same part from different groups | use | Two pies side by side, one of 8 answers and one of 12. | Steps the tea count in each pie until both tea slices are a quarter. | Two pies can show the same fraction when the groups and the counts differ, as 2 of 8 and 3 of 12 do. |
| 13 | A table makes a bar chart and a pie | idea | A table of three counts with its bar chart and its pie chart beside it. | Drags a bar and watches its slice grow and the other slices shrink. | A bar shows a count on its own, and a slice shows that count as a part of everyone. |
| 14 | Doubling the group keeps the pie | try | The bar chart and the pie of the same counts, with a button that doubles every count. | Presses double and then steps one count back. | Doubling every count doubles the bars and leaves the pie the same, since every part of the whole stays the same. |
| 15 | Pick the chart for the question | use | The bar chart and the pie side by side, and a question that changes: how many chose tea, or what part chose tea. | Taps the chart that answers each question, and the chart lights the bar or the slice that holds the answer. | A bar chart answers how many, and a pie chart answers what part of the whole. |
| 16 | The hours of one day | world | A pie of 24 hours in four colours for sleep, work, meals and free time. | Drags the edges, which snap to whole hours, to make a day like their own. | Eight hours of sleep fill a third of the day, and the pie shows the part each activity takes. |
| 17 | The weather over twelve days | world | A pie of 12 days coloured sunny, cloudy and rainy, with the bar chart of the same days. | Taps a day to change its weather and watches both charts. | When 6 of the 12 days are sunny, the sunny slice is one half of the pie. |
| 18 | Make the pie show this fraction | challenge | A pie of blank slices and a fraction to make. | Taps slices to colour them. | The goal holds when the coloured slices make the drawn fraction of the circle. |
| 19 | Draw this table as a pie | challenge | A table of three counts and a pie of the same number of slices in one colour. | Drags the edges between colours. | The goal holds when each colour fills as many slices as its table row counts. |
| 20 | Colour the pie to fit the clues | challenge | Clues about three colours and a pie of blank slices. | Taps slices and drags edges. | The goal holds when the pie meets every clue at once. |
| 21 | Where charts go next | end | The weather pie and its bar chart. | Taps a day to change its weather. | This is the last chart story at the beginner level, and the intermediate statistics story reads data with new tools. |

## Challenges

### Make the pie show this fraction
- Goal: the slices of the accent colour make the drawn fraction of the circle.
- Drawn each time: a slice count of 4, 6, 8 or 12, and a fraction among 1/2, 1/4, 3/4, 1/3, 2/3, 1/6, 5/6, 1/8,
  3/8, 5/8 and 7/8 whose denominator divides the slice count. The fraction is named with the fewest slices, such as one
  quarter, so with 8 slices the reader finds that a quarter is 2 slices. The pie starts blank.
- Reached by: tapping slices to colour them or clear them.
- Hidden: the fraction label of the coloured part and the count of coloured slices.
- Idea used: one slice is a fraction, slices that join.

### Draw this table as a pie
- Goal: each colour fills as many slices as its table row counts.
- Drawn each time: three counts of 1 or more with a total of 4, 6, 8 or 12, so one slice stands for one answer.
  The pie starts in one colour, with the edges of the other two colours together at the top.
- Reached by: dragging the edges between colours, which snap to slice lines.
- Hidden: the fraction labels and the slice count of each colour.
- Idea used: the whole circle is everyone, a pie chart beside a bar chart.

### Colour the pie to fit the clues
- Goal: the pie meets every clue at once.
- Drawn each time: a slice count of 8 or 12 and three colours with counts of 1 or more. The clues come from the
  drawn counts and name one colour's fraction, such as one quarter, say whether a second colour is more or less
  than half, and give the third colour the rest. No colour is exactly half, so the second clue always has an
  answer. The pie starts blank.
- Reached by: tapping slices and dragging edges.
- Hidden: the fraction labels, the slice counts and the half line.
- Idea used: slices that join, comparing slices, comparing with a half.
