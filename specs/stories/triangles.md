# `triangles` Triangles

- Level: beginner, building on the first ideas
- Needs: `flat-shapes`, `angles`, `centimetres-and-metres`
- Leads to: nothing at this level. The intermediate story `triangles-and-circles` follows it.
- Sections: names by sides, names by angles, two names for every triangle, naming by measuring
- In the world: the frames of a house roof, the two set squares in a geometry set
- Figure: a triangle with draggable corners. Equal sides carry the same tick mark, a right angle carries a square
  and the panel shows the names that fit. On the sorting pages a table of names by sides and by angles lights the
  cell of the triangle on the stage.
- Engine: `geo` `triangle` with draggable corners, and three additions. A measure gives the triangle's names
  (equilateral, isosceles or scalene, and acute, right-angled or obtuse) with equal side ticks and a name for each
  corner. A sorting table lights the cell of the current triangle. A ruler and the protractor of the `angle` scene
  lie on the board for the measuring pages. Pages leave out the `angle-sum` readout.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Are all triangles alike? | opening | The sail of a boat and a coat hanger, both triangles. | Drags the corners of the sail until it matches the coat hanger. | Every triangle has three sides and three corners, and triangles differ in the lengths of their sides and the sizes of their angles. |
| 2 | Equal sides get the same mark | idea | A triangle whose sides show tick marks when two lengths match. | Drags a corner until two sides carry the same tick. | Sides of equal length carry the same tick mark. |
| 3 | Three equal sides | try | A triangle with one free corner and a name that shows when all three sides are equal. | Drags the free corner until the three sides carry the same tick. | A triangle with three equal sides is equilateral, and its three angles are equal too. |
| 4 | Two equal sides | try | A triangle with a fixed base and a free top corner. | Drags the top corner along the line straight above the middle of the base, then off it. | A triangle with two equal sides is isosceles, and the two angles at the ends of its third side are equal. |
| 5 | No equal sides | use | A triangle with all three corners free. | Drags the corners until no two sides match. | A triangle whose sides are all different lengths is scalene. |
| 6 | One right angle | idea | A triangle with a fixed base and a free corner. | Drags the free corner until a right angle square appears at a corner. | A triangle with a right angle is right-angled. |
| 7 | Acute and obtuse triangles | try | The same triangle with each corner named acute, right or obtuse. | Drags the free corner across the board and watches the names. | A triangle whose three angles are acute is an acute triangle, and a triangle with an obtuse angle is an obtuse triangle. |
| 8 | A second right angle leaves it open | use | A base with a right angle at one end and a free side at the other end. | Turns the free side towards a right angle and watches the two sides stop meeting. | Two sides that stand at right angles on the same base point the same way and never meet, so a triangle has at most one right angle. |
| 9 | Every triangle has two names | idea | A triangle and a table with rows for equilateral, isosceles and scalene and columns for acute, right-angled and obtuse. | Drags a corner and watches the lit cell move. | Every triangle takes one name from its sides and one from its angles. |
| 10 | Visit the cells of the table | try | The same triangle and table, with a mark on each cell the triangle has visited. | Reshapes the triangle to visit as many cells as possible. | Seven cells can be reached, and an equilateral triangle stays in the acute column. |
| 11 | Half a square | use | A square with a cut from corner to corner. | Drags one half away and turns it, and the table lights its cell. | A square cut corner to corner gives two triangles that are right-angled and isosceles. |
| 12 | Measure the sides | idea | A triangle with its tick marks hidden and a ruler on the board. | Lays the ruler along each side and notes its length. | A ruler shows which sides are equal when the marks are hidden. |
| 13 | Measure the angles | try | A triangle with its corner names hidden and the protractor. | Lays the protractor on each corner. | The protractor shows whether a corner is acute, right or obtuse. |
| 14 | Name a triangle by measuring | use | A triangle with every mark and name hidden, the ruler and the protractor. | Measures the sides and angles, then taps its cell in the table. | Measuring the sides and the angles names a triangle that is hard to judge by eye. |
| 15 | The frames of a roof | world | A house roof frame of triangles, with a handle on the ridge. | Drags the ridge up and down and taps each triangle in the frame. | The main frame of a roof is an isosceles triangle, and the post down its middle splits it into two right-angled triangles. |
| 16 | Two set squares | world | The two set squares of a geometry set, one with corners of 45°, 45° and 90° and one with 30°, 60° and 90°. | Drags the corners of a triangle on the board to match each set square and reads the names it takes. | One set square is right-angled and isosceles and the other is right-angled and scalene, so together they draw many angles. |
| 17 | Make an isosceles triangle on this base | challenge | A fixed base and a free third corner. | Drags the free corner. | The triangle has two equal sides. |
| 18 | Make the right angle at this corner | challenge | A triangle with two fixed corners and one free one, and a card naming a corner. | Drags the free corner. | The triangle has a right angle at the corner on the card. |
| 19 | Make the triangle for this cell | challenge | A triangle with three free corners, the ruler, the protractor and a card naming a cell of the table. | Drags the corners and measures. | The triangle has both names on the card. |
| 20 | Where triangles go next | end | A triangle and a circle through its three corners. | Drags one corner and watches the circle follow. | The intermediate story `triangles-and-circles` adds up a triangle's angles and finds its area, and `quadrilaterals-and-polygons` names shapes with four or more sides. |

## Challenges

### Make an isosceles triangle on this base
- Goal: two sides of the triangle are equal in length, within a twentieth of the base, so a touch drag can reach it.
- Drawn each time: a base from 3 to 8 units long at a random tilt, and a start for the free corner where every side
  differs from the others by at least half a unit.
- Reached by: dragging the free corner.
- Hidden: the tick marks and the triangle's names.
- Idea used: names by sides.

### Make the right angle at this corner
- Goal: the corner the card names is a right angle, within 2°.
- Drawn each time: two fixed corners from 3 to 8 units apart at a random tilt, and which corner the card names, the
  free one or one of the fixed two. The free corner starts with every angle at least 15° from a right angle.
- Reached by: dragging the free corner.
- Hidden: the right angle squares and the corner names.
- Idea used: names by angles.

### Make the triangle for this cell
- Goal: the triangle has both names on the card, one by sides and one by angles. Two sides count as equal within a
  twentieth of their length, and a right angle counts within 2°.
- Drawn each time: one of the seven cells that a triangle can reach, with equilateral drawn less often, and a
  start triangle in a different row and a different column of the table.
- Reached by: dragging the three corners, measuring with the ruler and the protractor.
- Hidden: the tick marks, the right angle squares, the names and the lit cell of the table.
- Idea used: names by sides, names by angles, two names for every triangle, naming by measuring.
