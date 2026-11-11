# `times-tables` Times tables

- Level: beginner, building on the first ideas
- Needs: `equal-groups`
- Leads to: `sharing-and-grouping`, `any-order`, `ten-times-the-place`, `area-of-rectangles`
- Sections: a table is a count in steps, twos, fives and tens, doubles make the fours and eights, nines are tens
  less one group, the times square
- In the world: spiders and their legs, beats in bars of music, tickets for a group at the zoo
- Figure: an array with a slider for its rows beside the list of the table it builds, and the 10 by 10 times square.
  The reader slides the rows, picks a table, and taps cells of the square.
- Engine: `array` from the beginner family that holds `counters`, with a slider for rows, a list of the table's facts
  that lights the current one, a second array stacked on the first to show a double, and one column greyed out.
  A new `grid` scene `times` draws the 10 by 10 times square, lights the row, the column and the array of a tapped
  cell, greys out whole tables picked with chips, counts the cells left, and lets a challenge blank the numbers and
  mark cells.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | How many legs do seven spiders have? | opening | Spiders in a row, each with 8 legs, and a count box. | Adds spiders one at a time and counts the legs in eights. | Counting in eights is slow until the eight table is known. |
| 2 | A table is a count in steps | idea | An array of rows of 4 with a slider for rows, beside the list 1 × 4 to 10 × 4. | Slides the rows from 1 to 10 and watches the fact light up in the list. | The four table is the count in fours written as 1 × 4, 2 × 4 and on to 10 × 4. |
| 3 | Pick any table | try | The array and the list, with chips for the tables 1 to 10. | Picks a table with a chip and slides the rows. | Every table is a count in steps of its own number. |
| 4 | Twos are doubles | idea | An array of rows of 2 and the two table. | Slides the rows from 1 to 10. | Two times a number is the number added to itself. |
| 5 | Two fives make a ten | try | Two arrays side by side, rows of 5 and rows of 10, with one slider for both. | Slides the rows and watches each row of ten match two rows of five. | Ten times a number is two lots of five times it, so two lots of 6 × 5 = 30 make 6 × 10 = 60. |
| 6 | Twos, fives and tens on the hundred square | use | The hundred square with the first ten numbers of a count lit. | Taps 2, 5 and 10 and compares the cells each table lights. | The ten table ends in 0, the five table ends in 5 or 0, and the two table lights every other number. |
| 7 | Double the twos to get the fours | idea | An array of rows of 2 and a copy that stacks on it to make rows of 4. | Taps Double to stack the copy, then slides the rows. | Four times a number is double two times it. |
| 8 | Double again for the eights | try | An array of rows of 4 that doubles into rows of 8. | Slides the rows and taps Double. | The eight table is the four table doubled, so 7 × 8 is double 7 × 4 = 28, which is 56. |
| 9 | Sixes double the threes | use | An array of rows of 3 that doubles into rows of 6. | Slides the rows to 7 and taps Double. | Six times a number is double three times it, so 7 × 6 is double 21, which is 42. |
| 10 | Nine is ten less one | idea | An array of rows of 10 with its last column greyed out. | Slides the rows from 1 to 10. | Nine times a number is ten times it less one group, so 6 × 9 = 60 − 6 = 54. |
| 11 | The digits of the nines | try | The times square with the nine table lit and a slider along it. | Slides along the nine table from 1 × 9 to 10 × 9. | Up to 9 × 9 the tens digit goes up by one as the ones digit goes down by one, and the two digits add to 9. |
| 12 | Find 4 × 9 two ways | use | The array of rows of 10 with a greyed column, beside the times square. | Sets 4 rows and taps the cell 4 × 9 on the square. | Ten fours less one four and the cell in the square both give 36. |
| 13 | The times square holds every fact | idea | The 10 by 10 times square. | Taps a cell, and its row, its column and the array it stands for light up. | The cell in row 6 and column 7 holds 6 × 7 = 42. |
| 14 | Slide along a row | try | The times square with a marker on one row. | Drags the marker along a row and then down a column. | Each step to the right adds the row's number again. |
| 15 | The facts left to learn | use | The times square with chips for the tables 1, 2, 5, 9 and 10 and a count of cells left. | Taps chips to grey out the tables already known. | After the tables of 1, 2, 5, 9 and 10 only a few facts are left, such as 6 × 7 and 7 × 8. |
| 16 | Beats in a song | world | A row of bars of music with 4 beats each and the four table beside it. | Adds bars with a stepper and switches the beats in a bar between 3 and 4. | A song of 8 bars of 3 beats has 8 × 3 = 24 beats. |
| 17 | Tickets for a group at the zoo | world | A ticket desk with a price for each ticket and a row of visitors. | Adds visitors with a stepper and picks a ticket price from 5 to 9. | The cost of the group is the number of visitors times the price of one ticket. |
| 18 | Count to the number in steps | challenge | An array with a slider for rows and the table fixed. | Slides the rows. | The page asks for the number of rows of the drawn size that make the drawn total. |
| 19 | Find every cell that holds the number | challenge | The times square with its numbers hidden and its row and column headings shown. | Taps cells to mark them and taps again to clear. | The page asks for every cell whose fact makes the drawn number. |
| 20 | Where the tables go next | end | The times square with one cell tapped. | Taps cells and watches the arrays. | The times tables lead to `sharing-and-grouping`, `any-order`, `ten-times-the-place` and `area-of-rectangles`. |

## Challenges

### Count to the number in steps
- Goal: the array holds exactly the drawn total. The title shows the numbers, such as "Count to 42 in sevens".
- Drawn each time: a table from 3 to 9 and a number of rows from 3 to 10. The total is their product. The page opens
  with one row.
- Reached by: the slider for rows.
- Hidden: the count, the list of facts and the row count.
- Idea used: a table is a count in steps.

### Find every cell that holds the number
- Goal: the marked cells are exactly the cells of the square that hold the drawn number.
- Drawn each time: a number from 6 to 40 that sits in at least two cells of the 10 by 10 square, such as 12, 18, 24
  or 36. The square opens with no cells marked.
- Reached by: tapping cells to mark and clear them.
- Hidden: the numbers in the cells and the count of marked cells.
- Idea used: the times square, doubles and the tables of twos, fives and tens.
