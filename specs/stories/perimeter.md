# `perimeter` Perimeter

- Level: beginner, building on the first ideas
- Needs: `centimetres-and-metres`, `flat-shapes`, `adding-tens-and-ones`
- Leads to: `area-of-rectangles`
- Sections: the way round, adding the sides, rectangles and squares, shapes on a grid, the missing side
- In the world: a fence round a vegetable patch, a ribbon border round a noticeboard
- Figure: a shape with straight sides on a square grid, its corners dragged to whole units, each side labelled
  with its length and the perimeter added up under it. On the grid pages the reader builds a shape from unit
  squares by tapping cells.
- Engine: `geo` `triangle`, `rectangle`, `quadrilateral` and `regular-polygon` with `grid: true`, corners that
  snap to whole units and the `perimeter` measure. New scene `tiles` in `geo`: a grid where the reader taps cells
  on and off to build a shape, with an outline round the outside, a count of the squares and a count of the unit
  edges on the outline. An ant that walks the outline runs on Start with a time slider, from the kit's `player`.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Lights round a window | opening | A window frame and a string of lights too short to go round it. | Drags the lights along the frame and finds the string ends before the corner it started from. | To buy the right string, we need the length of the whole way round the window. |
| 2 | The way round a shape | idea | An ant at one corner of a five sided shape, with Start and a time slider. | Presses Start and drags the slider back and forth as the ant walks the edge. | The perimeter is the length of the whole way round a shape, back to where it started. |
| 3 | Add the sides | idea | A triangle with each side labelled in centimetres. | Drags a corner and watches the side lengths and their sum change. | The perimeter is the sum of the lengths of all the sides. |
| 4 | Any number of sides | use | A shape whose number of sides the reader chooses from 3 to 6. | Picks a number of sides and drags corners, and watches the sum. | Every shape with straight sides has a perimeter, the sum of its sides. |
| 5 | Opposite sides match | idea | A rectangle with all four sides labelled. | Drags the right side and sees both the top and the bottom change together. | A rectangle has two equal lengths and two equal widths. |
| 6 | The length and the width count twice | try | A rectangle with sliders for its length and width. | Moves the sliders and watches the perimeter as length plus width, doubled. | The perimeter of a rectangle is length plus width, taken twice. |
| 7 | A square needs one side | use | A square with one slider for its side. | Moves the slider and watches the perimeter add four equal sides. | A square's perimeter is its side taken four times. |
| 8 | Count the edges on a grid | idea | A shape made of unit squares, with its outline marked. | Taps each unit edge on the outline, and the page counts them. | On a grid, the perimeter is the number of unit edges round the outside. |
| 9 | One more square | try | A shape of unit squares that the reader can grow and shrink. | Taps cells to add and remove squares and watches the perimeter. | Adding a square can lengthen the perimeter, leave it the same, or shorten it when it fills a notch. |
| 10 | An L shaped room | use | An L shape with every side labelled in metres. | Drags the inside corner and watches the six sides and their sum. | Every outside side counts, the short ones in the notch too. |
| 11 | The missing side of a rectangle | idea | A rectangle with its perimeter given and one side unlabelled. | Drags the unlabelled side until the sum of the sides equals the given perimeter. | Taking the known sides away from the perimeter leaves the missing side. |
| 12 | The steps add up to the long side | try | An L shape with two short sides unlabelled. | Drags the inside corner and watches the two short sides along the top always add up to the bottom. | The sides that step along one edge add up to the side opposite them. |
| 13 | The missing side of a triangle | use | A triangle with a perimeter of 24 cm and two sides of 7 cm and 9 cm. | Drags the third corner until the sides add up to 24 cm. | The third side is the perimeter minus the two known sides. |
| 14 | Fencing a vegetable patch | world | A garden plan in metres with a patch the reader resizes and fence panels of 1 m. | Drags the patch's corners and watches how many panels the fence needs. | Fencing is bought by the length of the perimeter. |
| 15 | A ribbon border round a noticeboard | world | A noticeboard in centimetres and a 3 m roll of ribbon. | Drags the board's corner and watches whether the ribbon reaches round. | A border is as long as the perimeter, so a 3 m roll covers boards up to 300 cm round. |
| 16 | Make a rectangle with a perimeter of 18 cm | challenge | A rectangle with sliders for its length and width. | Moves the sliders. | The goal holds when the perimeter is the drawn length. |
| 17 | Find the missing side | challenge | A shape with its perimeter given and one side the reader drags. | Drags the side. | The goal holds when the sides add up to the given perimeter. |
| 18 | Build a shape of 8 squares with a perimeter of 14 | challenge | An empty grid. | Taps cells on and off. | The goal holds when the shape has the drawn number of squares and the drawn perimeter. |
| 19 | The inside of the fence | end | The vegetable patch from page 14 with its inside shaded. | Drags a corner and watches the shaded inside grow. | The next story, `area-of-rectangles`, measures the space inside a shape and links it to the perimeter. |

## Challenges

### Make a rectangle with a perimeter of 18 cm
- Goal: the rectangle's perimeter is the drawn length. The 18 in the title is the drawn perimeter.
- Drawn each time: an even perimeter from 8 to 36 cm that differs from the starting rectangle's. The sliders give
  length and width from 1 to 15 cm in whole centimetres.
- Reached by: the length and width sliders.
- Hidden: the perimeter readout and the sum under the figure. The side labels stay.
- Idea used: rectangles and squares.

### Find the missing side
- Goal: the sides add up to the perimeter the page gives.
- Drawn each time: a shape, a triangle, a rectangle or an L shape, with its known sides from 2 to 12 cm and a
  perimeter that leaves a missing side from 2 to 12 cm. For a triangle the missing side is shorter than the other
  two together and longer than their difference. The dragged side moves from 1 to 15 cm and starts at a length other than the answer.
- Reached by: dragging the side, which snaps to whole centimetres.
- Hidden: the label of the dragged side and the running sum.
- Idea used: adding the sides, the missing side.

### Build a shape of 8 squares with a perimeter of 14
- Goal: the shape is one piece, has the drawn number of squares and has the drawn perimeter. The 8 and the 14 in
  the title are drawn.
- Drawn each time: a number of squares from 4 to 10 and an even perimeter that a shape of that many squares can
  have, from the smallest possible up to twice the squares plus 2, on a grid of 8 by 8 cells. The grid starts
  empty.
- Reached by: tapping cells on and off.
- Hidden: the perimeter readout. The count of squares stays.
- Idea used: shapes on a grid, adding the sides.
