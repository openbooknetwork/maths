# `flat-shapes` Flat shapes

- Level: beginner, first ideas
- Needs: nothing
- Leads to: `solid-shapes`, `triangles`, `quadrilaterals-and-polygons`, `perimeter`
- Sections: sides and corners, names of shapes, a shape in any direction, shapes put together
- In the world: the shapes of road signs, laying floor tiles with no gaps
- Figure: a shape with straight sides on a plain board. The reader drags its corners, taps a side to add a corner,
  turns the whole shape by a handle, and on later pages drags and turns shape pieces into an outline.
- Engine: two new scenes in `geo`. `shape` draws a polygon of 3 to 8 corners that the reader drags, grows by
  tapping a side and shrinks by tapping a corner, turns by a handle, and reads out its sides, corners and name
  (triangle, square, rectangle, pentagon, hexagon, octagon, or a shape with that many sides). `tiles` holds pieces
  that drag, turn in eighth turns on a tap, snap together and fill an outline, and reports gaps and overlaps.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Describe a shape on the phone | opening | A five-sided shape that a friend on a phone cannot see. | Taps each corner and each side, and the panel counts them. | Counting the sides and corners of a shape lets someone picture it without seeing it. |
| 2 | Sides and corners | idea | A triangle with its sides and corners marked as the reader taps them. | Taps each side and each corner. | A side is a straight edge of a shape and a corner is where two sides meet. |
| 3 | Add a corner | try | A triangle. Tapping a side puts a new corner in its middle. | Taps sides to add corners and drags each new corner out. | Each new corner adds one side, so a shape with straight sides has as many sides as corners. |
| 4 | A circle is round | use | A shape with a slider for its number of equal sides, from 3 to 20. | Slides the number of sides up and watches the shape grow round. | A circle is a round curve with no sides and no corners, and a shape with many short sides looks more and more like one. |
| 5 | Three sides make a triangle | idea | A triangle with draggable corners and its name below. | Drags the corners into tall, flat and narrow triangles. | Every shape with three straight sides is a triangle. |
| 6 | Square and rectangle | try | A four-sided shape whose corners snap to square when they are close. | Drags the corners until the panel names a rectangle, then a square. | A rectangle has four square corners, and a square has four square corners and four equal sides. |
| 7 | Five, six and eight sides | use | A square that grows a corner on each tap of a side. | Adds corners and watches the name change to pentagon, hexagon and octagon. | The name of a shape with many sides counts them, as pentagon for five, hexagon for six and octagon for eight. |
| 8 | A turned square is still a square | idea | A square with a turn handle. | Turns the square until it stands on a corner. | A shape keeps its name when it is turned. |
| 9 | A triangle at any size and turn | try | A triangle with a turn handle and draggable corners. | Turns the triangle and drags it larger, smaller and thinner. | A triangle stays a triangle at any size and in any direction. |
| 10 | Find every triangle | use | A board of twelve shapes at different sizes and turns. | Taps every triangle on the board. | Counting the sides finds a shape's name however it lies. |
| 11 | Two triangles make a square | idea | Two triangle pieces and a square outline. | Drags and turns the two pieces until they fill the square. | Two shapes put together side to side make a new shape. |
| 12 | The same pieces make a new shape | try | The same two triangle pieces and three outlines to choose from, a square, a large triangle and a slanted four-sided shape. | Fills each outline in turn with the two pieces. | The same pieces make shapes with different numbers of corners. |
| 13 | Cut a rectangle in two | use | A rectangle with a straight cut whose two ends the reader drags along its edge. | Drags the cut from corner to corner, then across the middle. | A straight cut splits a shape into two shapes, such as two triangles or two smaller rectangles. |
| 14 | Road signs by their shape | world | Three blank signs, a triangle, a circle and a rectangle, and an octagon still to make. | Adds corners to a square sign until it has the eight sides of a stop sign. | In many countries a driver knows the kind of a sign from its shape before reading it, and a stop sign is an octagon. |
| 15 | Tile a floor with no gaps | world | A patch of floor and a box of square, triangle, hexagon and circle tiles. | Drags tiles onto the floor, trying each kind. | Squares, triangles and hexagons fit together with no gaps, and circles leave gaps between them. |
| 16 | Make a shape with this many sides | challenge | A shape on the board and a card with a number of sides. | Adds and removes corners and drags them. | The shape has the number of sides on the card. |
| 17 | Fill the outline with the pieces | challenge | An outline and two to four pieces lying scattered and turned. | Drags and turns the pieces into the outline. | The pieces fill the outline with no gap and no overlap. |
| 18 | Make the shape the card names | challenge | A shape lying at a turn and a card with a shape's name. | Adds or removes corners, drags them and turns the shape. | The shape matches the name on the card. |
| 19 | Where next | end | A cube made from six square faces, a triangle and a square fence. | Taps each of the three. | `solid-shapes` takes flat shapes into solids, `triangles` sorts the kinds of triangle, and `perimeter` measures the way round a shape. `quadrilaterals-and-polygons` builds on this story too. |

## Challenges

### Make a shape with this many sides
- Goal: the shape has exactly the number of sides on the card.
- Drawn each time: a number of sides from 3 to 8, and a starting shape with a different number of sides, at least
  two away.
- Reached by: tapping sides to add corners, tapping corners to remove them, dragging corners.
- Hidden: the side and corner counts and the shape's name.
- Idea used: sides and corners.

### Fill the outline with the pieces
- Goal: the pieces cover the outline with no gap and no overlap.
- Drawn each time: one outline from a set of puzzles made of two to four pieces (squares, rectangles, half squares
  and equal triangles), and a scattered start where every piece lies at a different turn from its place in the
  outline.
- Reached by: dragging pieces and tapping them to turn.
- Hidden: the guide lines inside the outline.
- Idea used: a shape in any direction, shapes put together.

### Make the shape the card names
- Goal: the shape is the one the card names, at any size and turn.
- Drawn each time: a name from triangle, rectangle, square, pentagon, hexagon and octagon, and a starting shape
  with a different number of corners, turned an amount between one eighth and three eighths of a turn. A square or
  rectangle target starts from a shape whose corners are not square.
- Reached by: adding and removing corners, dragging corners, turning by the handle.
- Hidden: the shape's name and its side and corner counts.
- Idea used: sides and corners, names of shapes, a shape in any direction.
