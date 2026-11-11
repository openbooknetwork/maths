# `tenths-and-hundredths` Tenths and hundredths

- Level: beginner, building on the first ideas
- Needs: `fractions-on-a-line`, `ten-times-the-place`, `centimetres-and-metres`, `money`
- Leads to: `comparing-decimals`
- Sections: tenths, hundredths, tenths and hundredths together, wholes before the point, money and measures
- In the world: paying a shop price with coins, a long jump measured in metres and centimetres
- Figure: a square whole cut into 10 columns of 10 small squares, which the reader shades by tapping a column for a
  tenth or a square for a hundredth, with place value columns for ones, tenths and hundredths and a number line below
  that follows.
- Engine: a new `parts` scene `decimal`. It draws 1 to 3 wholes as 10 by 10 grids, shades a column on a tap of the
  column's head and a square on a tap of the square, reads out the amount as a fraction over 10 or 100, as a decimal
  and as digits in place value columns, and marks it on a number line that can zoom from tenths to hundredths. The
  existing `convert` scene is close but writes a percent. The coin pages need a coin tray where the reader drags coins
  worth 1, one tenth and one hundredth of a unit, which the `money` story's scene may provide. The challenges need new
  goals `shade-decimal`, `place-decimal` and `pay`.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | How tall is the plant? | opening | A plant beside a metre stick cut into tenths, its top between the 1 metre mark and the next. | Drags a marker to the top of the plant. | The plant is 1 metre and 4 tenths of a metre tall, and this story writes that as 1.4 metres. |
| 2 | One tenth is one of ten columns | idea | One grid with ten columns. | Taps one column to shade it. | One column is 1/10 of the whole, written 0.1. |
| 3 | Shade the tenths | try | One grid and the place value columns. | Taps columns one at a time. | The tenths digit counts the shaded columns, from 0.1 up to 0.9, and ten tenths make 1. |
| 4 | Find seven tenths on the line | use | A line from 0 to 1 cut into tenths, with the grid above. | Drags the point to the seventh tick. | 0.7 sits seven steps of one tenth from 0, at the same place as 7/10. |
| 5 | One hundredth is one small square | idea | One grid. | Taps one small square. | One small square is 1/100 of the whole, written 0.01. |
| 6 | Ten hundredths make one tenth | try | One grid with one column outlined. | Taps squares in the column until it is full. | 10/100 fills one column, so ten hundredths make one tenth, as ten ones make a ten. |
| 7 | Zoom in on the first tenth | use | A line from 0 to 0.1 cut into hundredths. | Drags the point to the fourth tick. | 0.04 sits four hundredths from 0, inside the first tenth. |
| 8 | Read three tenths and seven hundredths | idea | One grid with three columns and seven squares shaded, and the place value columns. | Taps squares on and off. | 0.37 is 3 tenths and 7 hundredths, and it is also 37/100. |
| 9 | Shade and watch the digits | try | One grid and the place value columns. | Taps columns and squares. | The tenths digit counts full columns and the hundredths digit counts the squares in the next column. |
| 10 | Four tenths fill forty hundredths | use | One grid with four columns shaded and the readout as hundredths. | Taps a column off and on. | 4 tenths cover 40 small squares, so 0.4 and 0.40 are the same amount. |
| 11 | The wholes stand before the point | idea | Two grids, the first full and the second with 25 squares shaded, and the place value columns. | Taps squares in the second grid. | 1.25 is 1 whole and 25 hundredths, and the point separates the ones from the tenths. |
| 12 | Drag past one on the line | try | A line from 0 to 3 that zooms to hundredths, with the grids above. | Drags the point past 1 and past 2. | The ones digit counts the full grids and the digits after the point count the rest. |
| 13 | A zero keeps the hundredths in place | use | Three grids and the place value columns. | Taps to shade 2 wholes and 8 small squares. | 2.08 has no tenths, and its 0 keeps the 8 in the hundredths place. |
| 14 | Pay a price with coins | world | A price tag of 3.45, a tray, and coins worth 1, one tenth and one hundredth of a unit. | Drags coins onto the tray. | 3.45 is paid with 3 one unit coins, 4 tenth coins and 5 hundredth coins. |
| 15 | Measure a long jump | world | A tape in metres with centimetre ticks and a mark in the sand. | Drags the end of the tape to the mark. | A centimetre is one hundredth of a metre, so a jump of 4 metres and 36 centimetres is 4.36 metres. |
| 16 | Shade this decimal | challenge | One empty grid. | Taps columns and squares. | A decimal with two places counts tenths and hundredths. |
| 17 | Put the point on this decimal | challenge | A line from 0 to 3 that zooms to hundredths, with the point at 0. | Drags the point and zooms in. | The digits before and after the point say which whole, which tenth and which hundredth. |
| 18 | Pay this price with no more than nine of each coin | challenge | A price tag, an empty tray and the three kinds of coin. | Drags coins onto the tray and back. | Each digit of a price counts the coins of its place. |
| 19 | Tenths and hundredths lead on | end | The plant and the metre stick from the opening, zoomed to centimetres. | Drags the marker to the top of the plant. | Comparing decimals finds which of two decimals is larger, digit by digit. |

## Challenges

### Shade this decimal
- Goal: the shaded amount equals the drawn decimal.
- Drawn each time: a decimal from 0.01 to 0.99 in hundredths, with a hundredths digit that is not 0 in at least half
  the draws. The grid starts empty, so the page opens unsolved.
- Reached by: tapping columns and squares.
- Hidden: the decimal readout, the fraction readout and the place value digits.
- Idea used: tenths, hundredths, tenths and hundredths together.

### Put the point on this decimal
- Goal: the point sits on the drawn decimal.
- Drawn each time: a decimal from 0.05 to 2.95 in hundredths that is not a whole number. The point starts at 0 and
  the line starts zoomed out to tenths, so the page opens unsolved.
- Reached by: dragging the point and the zoom control.
- Hidden: the point's label and the tick labels below the tenths.
- Idea used: tenths and hundredths together, wholes before the point.

### Pay this price with no more than nine of each coin
- Goal: the tray holds the drawn price, with at most nine coins of each kind.
- Drawn each time: a price from 1.11 to 9.99 in hundredths, with no digit 0, so every kind of coin is needed. The
  tray starts empty, so the page opens unsolved.
- Reached by: dragging coins onto the tray and back.
- Hidden: the tray's total.
- Idea used: wholes before the point, money and measures.
