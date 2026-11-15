# Writing a page's text

For whoever writes or edits the English text of a page.

## How the text is written

The user's global rules set the baseline: plain words, each idea once, no em dashes, no semicolons in prose. The
book adds these.

- Every sentence has a subject and a verb. A colon introduces a list or a formula. Write "Keep r still and change θ.
  The point runs round a circle." in place of joining the two with a colon.
- A page teaches one step with one figure, and its text tells the reader what to try.
- A title follows the same rule. A page title is a short sentence or a plain name, such as "Tangent is the slope
  of the radius". A challenge title is the instruction itself, such as "Find both angles at one height".
- A live value is not followed by the noun it counts, because "holds [1](@n) counters" turns false at 1. Write
  "The number of counters is [1](@n)".
- A sentence around a live value stays true for every value the reader can reach. `kitap check` proves only the
  starting value. Write "Now the scale shows [7](@right)" where "The right pan holds [7](@right), which is odd"
  would turn false.
- A story shows where its idea is used in the world, and a later story in a `follows` chain uses new situations.
- A level says what a story assumes the reader knows. The text speaks to any reader at that level, of any age.
