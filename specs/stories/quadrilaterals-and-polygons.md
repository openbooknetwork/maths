# `quadrilaterals-and-polygons` Quadrilaterals and polygons

- Level: beginner, building on the first ideas
- Needs: `lines-parallel-perpendicular`, `angles`, `centimetres-and-metres`, `flat-shapes`
- Leads to: nothing at this level. The end page suggests the intermediate story `triangles-and-circles`.
- Sections: parallel sides, equal sides, right angles, families of shapes, regular polygons
- In the world: a folding garden trellis, a spanner on a hexagon nut
- Figure: a four-sided shape whose corners the reader drags. Parallel sides carry arrows, equal sides carry ticks,
  right angles carry squares, and the panel lists every name that fits. The last section swaps in a polygon of 3 to
  8 corners.
- Engine: `geo` `quadrilateral` with three additions: marks for parallel sides, equal sides and right angles, a
  measure that lists every name that fits (trapezium, parallelogram, rhombus, rectangle, square), and a family
  diagram that lights the names. A lock keeps the four sides equal for the rhombus pages. The last section uses
  `geo` `regular-polygon` and the `shape` scene planned for `flat-shapes`, with equal side ticks and equal angle
  marks.

This plan counts a trapezium as a quadrilateral with at least one pair of parallel sides, so every parallelogram is
a trapezium. Curricula differ here, and the user decides before the text is written.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Is a square a rectangle? | opening | A rectangle with draggable corners and the list of names that fit it. | Drags one side in until the rectangle becomes a square and watches the list. | A square keeps the name rectangle and gains new names, so shapes belong to families. |
| 2 | One pair of parallel sides | idea | A quadrilateral with arrows on parallel sides. | Drags one corner until two opposite sides carry arrows. | A quadrilateral with a pair of parallel sides is a trapezium. |
| 3 | Two pairs of parallel sides | try | The same quadrilateral. | Drags the corners until both pairs of opposite sides carry arrows. | A quadrilateral with two pairs of parallel sides is a parallelogram. |
| 4 | Opposite sides match | use | A parallelogram that stays one as the reader drags a corner. | Drags a corner and watches the tick marks on the sides. | The opposite sides of a parallelogram are equal in length, and its opposite angles are equal too. |
| 5 | Four equal sides | idea | A quadrilateral with tick marks on equal sides. | Drags the corners until all four sides carry the same tick. | A quadrilateral with four equal sides is a rhombus. |
| 6 | Push a rhombus over | try | A rhombus whose sides stay equal while a corner is dragged. | Pushes one corner to make the rhombus taller, then flatter. | A rhombus changes its angles and keeps its equal sides, and its opposite sides stay parallel. |
| 7 | Four right angles | idea | A quadrilateral with right angle squares. | Drags the corners until all four corners carry a square. | A quadrilateral with four right angles is a rectangle. |
| 8 | A square has every mark | try | A rectangle with draggable sides. | Drags a side until all four sides carry the same tick. | A square has four right angles, four equal sides and two pairs of parallel sides. |
| 9 | Check the marks with tools | use | A quadrilateral with its marks hidden, a ruler and the protractor. | Measures the sides and corners and taps the names that fit. | The ruler and the protractor show which names fit a shape when the marks are hidden. |
| 10 | The family of four-sided shapes | idea | The quadrilateral beside a family diagram, with the names that fit lit. | Drags corners and watches the lit names change. | Every square is a rectangle and a rhombus, and every rectangle and every rhombus is a parallelogram. |
| 11 | Lose one name at a time | try | A square and the family diagram. | Drags one corner a little and watches which names go out. | Moving one corner breaks some of the shape's properties, and each name it loses belongs to a property it broke. |
| 12 | Which names fit this shape? | use | A quadrilateral drawn by the page and the family diagram. | Taps every name in the diagram that fits, then drags the shape to test. | A shape takes every name whose properties it has. |
| 13 | All sides and all angles equal | idea | A regular polygon with a slider for its number of sides, from 3 to 8. | Moves the slider and watches the ticks and angle marks. | A regular polygon has all its sides equal and all its angles equal. |
| 14 | Equal sides with unequal angles | try | A hexagon whose sides stay equal while a corner is dragged. | Drags a corner and watches the angle marks change. | A polygon with equal sides and unequal angles is not regular, and a rhombus that is not a square is one such shape. |
| 15 | Regular shapes we already know | use | A triangle and a quadrilateral with draggable corners. | Drags the corners until each one is regular. | The regular shape with three sides has three equal sides and three equal angles, and the regular quadrilateral is the square. |
| 16 | A folding trellis | world | A garden trellis made of strips that cross, with a handle on one end. | Pulls the trellis open and pushes it shut. | Each gap in a trellis is a rhombus, and opening the trellis changes its angles while its sides stay equal. |
| 17 | A spanner on a nut | world | A hexagon nut and a spanner whose jaws are parallel. | Turns the nut and slides the spanner on, then switches the nut to a square and to a pentagon. | A regular hexagon has three pairs of parallel sides, so a spanner grips it in six positions, and a regular pentagon gives the jaws no parallel pair. |
| 18 | Make the shape the card names | challenge | A quadrilateral with draggable corners and a card with a name. | Drags the corners. | The shape has the name on the card. |
| 19 | Drag the corners into a regular polygon | challenge | A polygon with scattered corners. | Drags the corners. | The polygon is regular. |
| 20 | Make a shape with one name and not another | challenge | A quadrilateral, the ruler, the protractor and a card with two names. | Drags the corners and measures. | The shape has the first name on the card and lacks the second. |
| 21 | Where shapes go next | end | A parallelogram cut along a line and moved into a rectangle. | Drags the cut piece across. | The intermediate story `triangles-and-circles` finds the area of triangles and parallelograms. |

## Challenges

### Make the shape the card names
- Goal: the quadrilateral has the name on the card.
- Drawn each time: a name from trapezium, parallelogram, rhombus, rectangle and square, and a start quadrilateral
  with no parallel sides, no equal sides and no right angles, its corners at random places that keep it from
  crossing itself.
- Reached by: dragging the four corners, which snap to a fine hidden grid.
- Hidden: the parallel arrows, the tick marks, the right angle squares and the list of names.
- Idea used: parallel sides, equal sides, right angles.

### Drag the corners into a regular polygon
- Goal: the polygon is regular, with every side within a twentieth of the others and every angle within 3°.
- Drawn each time: a number of corners from 3 to 6, and a start where the corners lie at random places that keep
  the polygon from crossing itself, at least one side differing from another by a fifth.
- Reached by: dragging the corners.
- Hidden: the tick marks, the angle marks and the word regular.
- Idea used: regular polygons.

### Make a shape with one name and not another
- Goal: the quadrilateral has the first name on the card and lacks the second.
- Drawn each time: a pair of names where the second is a member of the first's family, such as a parallelogram that
  is not a rectangle, a rhombus that is not a square, a rectangle that is not a square, or a trapezium that is not a
  parallelogram. The start shape fails the first name.
- Reached by: dragging the four corners, which snap to a fine hidden grid, measuring with the ruler and the
  protractor.
- Hidden: every mark on the shape and the list of names.
- Idea used: parallel sides, equal sides, right angles, families of shapes.
