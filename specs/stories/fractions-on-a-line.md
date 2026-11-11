# `fractions-on-a-line` Fractions on a number line

- Level: beginner, building on the first ideas
- Needs: `unit-fractions`, `number-line`
- Leads to: `equivalent-fractions`, `mixed-numbers`, `tenths-and-hundredths`
- Sections: the whole from 0 to 1, equal steps, a fraction as a point, past one whole, whole numbers as fractions
- In the world: the play head of a music player, marker posts along a hiking trail
- Figure: a number line from 0 to 1, 2 or 3, each whole cut into 2 to 12 equal steps by a slider, with a bar above
  the first whole and a point the reader drags that snaps to the steps.
- Engine: a new `parts` scene `line`. It draws a number line of 1 to 3 wholes, cuts each whole into the steps a
  slider sets, shows an optional bar above the first whole that follows the point, snaps a draggable point to the
  ticks, and can show or hide the tick labels. The challenges need a new goal `place` that draws a fraction and holds
  when the point sits on it.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | How far has the train gone? | opening | A line from one station at 0 to the next at 1, cut into four equal stretches, with a train on it. | Drags the train to the third tick. | The train is three quarters of the way, and that place on the line has the number 3/4. |
| 2 | The whole runs from 0 to 1 | idea | A bar cut into four parts above a line from 0 to 1 cut the same way. | Taps parts of the bar, and the point follows the end of the shading. | The shaded length of the bar is the distance of the point from 0. |
| 3 | Cut the line into equal steps | try | A line from 0 to 1 with a slider for the steps, from 2 to 12. | Drags the slider. | The number of equal steps between 0 and 1 is the bottom number. |
| 4 | Count steps from zero | use | A line from 0 to 1 cut into sixths, with a point at 0. | Drags the point to the fourth tick. | A point four steps of one sixth from 0 sits at 4/6. |
| 5 | Every tick has a name | idea | A line from 0 to 1 cut into fifths, with the labels hidden. | Taps each tick to show its label. | The ticks read 0/5, 1/5, 2/5 and on up to 5/5. |
| 6 | Drag the point and watch its name | try | A line with a slider for the steps and a point whose label follows it. | Drags the point along the line and changes the steps. | The top number counts the steps from 0 to the point. |
| 7 | Find two thirds without labels | use | A line from 0 to 1 cut into thirds, with the labels hidden. | Drags the point two steps from 0. | Counting two steps of one third from 0 finds 2/3. |
| 8 | The line goes on past 1 | idea | A line from 0 to 2 cut into quarters. | Drags the point one step past 1. | Four quarters reach 1, so 5/4 lies one step further. |
| 9 | Count past one whole | try | A line from 0 to 3 with a slider for the steps. | Drags the point past 1 and past 2. | The top number is larger than the bottom when the point lies past 1. |
| 10 | Find three halves | use | A line from 0 to 2 cut into halves, with the labels hidden. | Drags the point three steps from 0. | 3/2 sits halfway between 1 and 2. |
| 11 | One whole has a fraction name | idea | A line from 0 to 2 cut into quarters. | Drags the point to the tick at 1. | The tick at 1 is 4/4, four steps of one quarter. |
| 12 | Change the steps and land on 1 | try | A line from 0 to 2 with a slider for the steps and the point at 1. | Slides the steps and drags the point back to 1 each time. | 1 is 2/2, 3/3 or 5/5, a fraction whose top and bottom match. |
| 13 | Find 2 in thirds | use | A line from 0 to 3 cut into thirds. | Drags the point to 2. | 2 is 6/3, because each whole holds three steps of one third. |
| 14 | Move the play head of a song | world | A music player's progress bar as a line from start to end, cut into quarters or fifths of the song. | Drags the play head to a tick. | The play head at 3/4 means three quarters of the song has played. |
| 15 | Find a marker post on a trail | world | A trail of 2 kilometres as a line from 0 to 2, with marker posts every quarter of a kilometre. | Drags a walker to the post the page names. | The post at 7/4 kilometres stands three quarters of a kilometre past the 1 kilometre post. |
| 16 | Put the point on the fraction | challenge | A line from 0 to 1 cut into a number of steps that differs from the target's bottom. | Slides the steps and drags the point. | A fraction is a point a number of equal steps from 0. |
| 17 | Put the point on the fraction past one | challenge | A line from 0 to 3 cut into a number of steps that differs from the target's bottom. | Slides the steps and drags the point. | A fraction larger than one keeps counting steps past 1. |
| 18 | Put the whole number on the line in the steps the page names | challenge | A line from 0 to 3 with the point at 0. | Slides the steps and drags the point. | A whole number has a fraction name for every size of step. |
| 19 | Fractions on a line lead on | end | The train line from the opening, with a slider for the steps. | Drags the train to any tick. | Equivalent fractions share a point, mixed numbers name points past 1, and tenths and hundredths cut the line into ten and a hundred. |

## Challenges

### Put the point on the fraction
- Goal: the line is cut into the target's bottom number of steps and the point sits on the target.
- Drawn each time: a bottom number from 2 to 10 and a top number from 1 to one less than the bottom, and a starting
  number of steps that differs from the bottom. The point starts at 0, so the page opens unsolved.
- Reached by: the steps slider and dragging the point.
- Hidden: the tick labels and the point's label.
- Idea used: equal steps, a fraction as a point.

### Put the point on the fraction past one
- Goal: the line is cut into the target's bottom number of steps and the point sits on the target.
- Drawn each time: a bottom number from 2 to 6 and a top number from one more than the bottom to one less than three
  times the bottom, leaving out multiples of the bottom. The starting steps differ from the bottom and the point starts
  at 0, so the page opens unsolved.
- Reached by: the steps slider and dragging the point.
- Hidden: the tick labels and the point's label.
- Idea used: equal steps, past one whole.

### Put the whole number on the line in the steps the page names
- Goal: the line is cut into the drawn number of steps and the point sits on the drawn whole number.
- Drawn each time: a whole number from 1 to 3 and a bottom number from 2 to 6, shown as "Show 2 in fifths". The
  starting steps differ from the drawn bottom and the point starts at 0, so the page opens
  unsolved.
- Reached by: the steps slider and dragging the point.
- Hidden: the tick labels and the point's label.
- Idea used: equal steps, past one whole, whole numbers as fractions.
