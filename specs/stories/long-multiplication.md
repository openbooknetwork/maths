# `long-multiplication` Long multiplication

- Level: beginner, building on the first ideas
- Needs: `ten-times-the-place`, `column-methods`, `rounding-and-estimating`
- Leads to: `written-division`
- Sections: multiplying each place by one digit, carrying, multiplying by a multiple of ten, splitting both numbers,
  the written layout in two rows
- In the world: the bricks in a garden wall, crates of bottles delivered to a dairy
- Figure: An array of squares, a rows by b columns, is split at the tens of each number into parts, with the
  written column layout beside it. The reader sets each number with steppers and taps a part of the array or a row
  of the layout, and the matching part and row light up together.
- Engine: new scene `multiply` in the place value family proposed in `ten-times-the-place` (`place`). It draws the
  split array, the written layout with carried digits, and fills the layout one row per page step. A page names
  the step it shows, so the steps of the method are pages on Prev and Next.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Hours in four weeks | opening | An array of 28 rows of 24 squares, one row for each day and one square for each hour. | Steps the number of days and watches the array grow row by row. | Counting 672 hours one by one is slow, so the story finds a written way to multiply. |
| 2 | Multiply each place on its own | idea | The array 3 × 24 is split into 3 × 20 and 3 × 4. | Taps each part to light its product. | 3 × 24 is 3 × 20 plus 3 × 4, which is 60 + 12 = 72. |
| 3 | Carry when a place passes nine | try | The written layout of a two digit number times one digit, with a small carried digit. | Sets both numbers with steppers and watches the carried digit appear and go. | When the ones make 12, the 2 stays in the ones and the 1 ten is carried to the tens column. |
| 4 | Three digits times one digit | use | The written layout of 236 × 4 beside its array split into hundreds, tens and ones. | Taps each column of the layout from right to left. | The same steps work for a number with hundreds, one column at a time from the right. |
| 5 | Times 20 is times 2 then times 10 | idea | The array 34 × 20 beside the array 34 × 2. | Taps ×10 on the small array and watches it grow to the large one. | 34 × 20 is 34 × 2 = 68 moved one place to the left, which makes 680. |
| 6 | The zero holds the ones place | try | The written row of 34 times a number of tens, with a 0 written in the ones. | Steps the tens digit from 1 to 9. | Writing the 0 first and then multiplying by the tens digit puts every digit one place to the left. |
| 7 | Thirty rows of 45 | use | The array 45 × 30 with its written row. | Taps each digit of the row to light its part of the array. | 45 × 30 is 45 × 3 = 135 moved one place, which makes 1350. |
| 8 | Cut the array into four parts | idea | The array 24 × 36 cut into 20 × 30, 20 × 6, 4 × 30 and 4 × 6. | Taps each part to light its product. | Each part is a times table fact moved by its zeros, and the four parts add up to the whole. |
| 9 | The parts follow the numbers | try | The split array with a stepper for each number from 11 to 99. | Steps either number and watches the four parts change size. | The four parts follow the tens and ones of each number, and their sum is the product. |
| 10 | Add the parts in a column | use | The four parts of 24 × 36 beside an empty column sum. | Drags each part into the column and watches the sum fill. | 600 + 120 + 120 + 24 = 864, so 24 × 36 = 864. |
| 11 | The first row multiplies by the ones | idea | The layout of 24 × 36 shows its first row, 24 × 6, and lights the matching strip of the array. | Taps the first row to light its strip. | The first row is 24 × 6 = 144, the two parts of the array in the 6 columns. |
| 12 | The second row multiplies by the tens | idea | The layout shows its second row, 24 × 30 with a 0 in the ones. | Taps the second row to light its strip. | The second row is 24 × 30 = 720, so it starts with a 0 in the ones place. |
| 13 | Add the two rows | try | The full layout of 24 × 36 with its sum, and steppers for both numbers. | Steps both numbers and watches each row and the sum work again. | The product is the two rows added, 144 + 720 = 864. |
| 14 | Carries in both rows | use | The layout of 47 × 58 with carried digits in both rows. | Taps each row to light its strip and its carried digits. | Each row carries as in one digit multiplication, and the rows together give 2726. |
| 15 | Bricks in a garden wall | world | A wall drawn as rows of bricks, with steppers for the rows and the bricks in a row. | Sets the rows and the bricks in a row to match the builder's plan. | The wall holds rows times bricks, worked as the two rows of the written method. |
| 16 | Crates of bottles at a dairy | world | Crates of 24 bottles stacked in an array, with a stepper for the crates delivered. | Steps the crates and taps the rows of the layout. | 36 crates of 24 bottles hold 864 bottles, and a bigger delivery adds a row of crates to the array. |
| 17 | Make the product with one digit | challenge | An empty layout of a two digit number times one digit, beside a target. | Sets the two digit number and the single digit with steppers. | The page shows a tick when the product equals the target. |
| 18 | Find the second number | challenge | The layout with the first number fixed and the second number open, beside a target. | Steps the tens and the ones of the second number. | The page shows a tick when the product equals the target. |
| 19 | Fix the wrong row | challenge | A finished layout of two two digit numbers with one wrong row and a wrong sum. | Taps digits of the rows and the sum to step them up or down. | The page shows a tick when both rows and the sum are right. |
| 20 | Where multiplying goes next | end | The split array with steppers for both numbers. | Sets two numbers and taps a part. | The end page names `written-division`, which undoes this method row by row. |

## Challenges

### Make the product with one digit
- Goal: A two digit number times a single digit equals the target.
- Drawn each time: A target that is a × b, with a from 12 to 99 and b from 3 to 9, from 100 to 891. The page opens
  at 10 × 1, which never makes the target. Any pair that makes the target counts.
- Reached by: steppers for the tens and ones of the two digit number and for the single digit.
- Hidden: The product of the reader's numbers and the sum of the layout.
- Idea used: multiplying each place by one digit, carrying.

### Find the second number
- Goal: The fixed first number times the reader's second number equals the target.
- Drawn each time: A first number from 12 to 49 and a second from 12 to 39. The target is their product. The page
  opens with the second number at 10, which is never drawn.
- Reached by: steppers for the tens and ones of the second number.
- Hidden: The product, the sum of the layout, and the size of the parts of the array.
- Idea used: splitting both numbers, the written layout in two rows.

### Fix the wrong row
- Goal: Both rows of the layout and the sum below them are right for the two numbers shown.
- Drawn each time: Two numbers from 13 to 99 and one mistake from this list: the second row missing its 0, a carry
  left out of the first row, or a carry left out of the second row. A carry mistake is drawn only for a row that
  has a carry. The sum is the sum of the wrong rows, so the page opens wrong. Each row and the sum have four digit places, so\n  every right value fits.
- Reached by: tapping a digit of a row or of the sum to step it from 0 to 9.
- Hidden: The array and the right product.
- Idea used: carrying, multiplying by a multiple of ten, the written layout in two rows.
