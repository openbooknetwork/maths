# `area-of-rectangles` Area of rectangles

- Level: beginner, building on the first ideas
- Needs: `area-by-counting-squares`, `times-tables`, `perimeter`, `adding-tens-and-ones`
- Leads to: no beginner story. The end page names `triangles-and-circles` at the intermediate level, where the
  area of a triangle comes next.
- Sections: rows times squares, length times width, the missing side, shapes made of rectangles, area and
  perimeter
- In the world: wood for a desk top shaped like an L, a patio of 24 square slabs that needs edging round it
- Figure: a rectangle on a square grid with sliders for its length and width, its area and perimeter read out
  under it. For shapes made of rectangles, an L shape with a cut line the reader drags.
- Engine: `geo` `rectangle` with `grid: true` and the `area` and `perimeter` measures, and the `tiles` scene from
  `area-by-counting-squares` for the patio. New figure `l-shape` in `geo`: an L shape with sliders for the outer
  sides and the notch, a cut line the reader drags across it, and the area of each part.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Turf for a big lawn | opening | A lawn plan in square metres beside a small lawn plan. | Starts covering the big lawn with square metres of turf and sees how slow it is. | Counting every square of a big lawn is slow, so we want a faster way. |
| 2 | Rows times squares in a row | idea | A rectangle of tiles with sliders for the rows and the squares in a row. | Moves the sliders and watches the count and the times fact under it. | The number of rows times the squares in each row gives the area. |
| 3 | Length times width | try | The rectangle with its grid fading out and its sides labelled in centimetres. | Moves the length and width sliders and watches the area in cm². | Area is length times width, in square units of the same unit as the sides. |
| 4 | A square is a rectangle too | use | A square with one slider for its side. | Moves the slider and watches the area as side times side. | A square's area is its side times itself. |
| 5 | Find a side from the area | idea | A rectangle of 24 cm² with a width of 4 cm and a length the reader drags. | Drags the length until the area reads 24 cm². | The missing side is the number that times the known side gives the area. |
| 6 | Many rectangles with one area | try | A rectangle whose area stays 12 squares while the reader drags its width. | Drags the width and watches the length jump to fit. | The rectangles of area 12 come from the times facts that make 12. |
| 7 | The width of a flower bed | use | A flower bed of 30 m² along a wall 6 m long. | Drags the bed's front edge until its area reads 30 m². | A known area and a known side give the other side. |
| 8 | Cut an L into two rectangles | idea | An L shape with a cut line. | Drags the cut line into place and watches the two parts' areas and their sum. | Cut the shape into rectangles, find each area and add them. |
| 9 | Any cut gives the same total | try | The L shape with a cut that can go across or down. | Moves the cut from across to down and watches the total stay the same. | The parts change with the cut, and their total stays the area of the shape. |
| 10 | Take the missing corner away | use | A big rectangle with a corner cut out, and sliders for the cut out piece. | Moves the sliders and watches the area as the big rectangle minus the piece. | The area is also the whole rectangle minus the part that is cut out. |
| 11 | The same area can have a different perimeter | idea | Rectangles of 12 tiles with a slider for the rows. | Moves the slider through 1, 2, 3, 4, 6 and 12 rows and watches the perimeter. | Rectangles with the same area can have very different perimeters. |
| 12 | Close to a square is shortest | try | Rectangles of 36 tiles with a slider for the rows. | Moves the slider and finds the rectangle with the shortest perimeter. | The closer a rectangle is to a square, the shorter its perimeter for the same area. |
| 13 | The same perimeter can hold a different area | idea | A loop of 20 units of string held as a rectangle with a corner the reader drags. | Drags the corner and watches the area change while the perimeter stays 20. | A fixed length round the outside can hold very different areas. |
| 14 | The most space inside a fence | use | A fence of 24 m round a rectangular pen. | Drags the pen's corner to find the pen with the most grass inside. | For a fixed perimeter, the square holds the most area. |
| 15 | Wood for a corner desk | world | A plan in metres of a desk top shaped like an L. | Drags the cut line and watches the two areas that make up the wood order. | A desk top with a corner is split into rectangles to order its wood. |
| 16 | A patio of 24 slabs | world | 24 square slabs and a length of edging that runs round them. | Drags slabs into different rectangles and watches the edging needed. | The same slabs make patios that need different lengths of edging. |
| 17 | Make a rectangle with an area of 18 cm² | challenge | A rectangle with length and width sliders. | Moves the sliders. | The goal holds when the area is the drawn number of cm². |
| 18 | Make the rectangle as big as the L shape | challenge | An L shape and a rectangle with length and width sliders. | Cuts the L shape into rectangles and moves the rectangle's sliders. | The goal holds when the two areas are equal. |
| 19 | Make a rectangle with an area of 24 and a perimeter of 20 | challenge | A rectangle with length and width sliders. | Moves the sliders. | The goal holds when both the area and the perimeter match the drawn ones. |
| 20 | Shapes with slanted sides | end | A rectangle that leans over into a parallelogram as the reader drags its top. | Drags the top edge sideways. | The area of slanted shapes comes later, in the intermediate story `triangles-and-circles`. |

## Challenges

### Make a rectangle with an area of 18 cm²
- Goal: the rectangle's area is the drawn number of cm². The 18 in the title is drawn.
- Drawn each time: an area from 6 to 60 that is a times fact with both numbers from 2 to 10, and that differs from
  the starting rectangle's area. The sliders run from 1 to 10 cm.
- Reached by: the length and width sliders.
- Hidden: the area readout. The side labels stay.
- Idea used: length times width.

### Make the rectangle as big as the L shape
- Goal: the rectangle's area equals the L shape's area.
- Drawn each time: an L shape with outer sides from 4 to 10 and a notch cut from one corner, each side of the notch
  at least 1 shorter than the outer side beside it. Its area is a times fact with both numbers from 2 to 10. The
  rectangle's sliders run from 1 to 10, and the rectangle starts with a different area.
- Reached by: dragging the cut line on the L shape, the rectangle's length and width sliders.
- Hidden: the area of the L shape, the area of its parts and the area of the rectangle. Side labels stay.
- Idea used: length times width, shapes made of rectangles.

### Make a rectangle with an area of 24 and a perimeter of 20
- Goal: the rectangle's area and perimeter both equal the drawn values. The numbers in the title are drawn.
- Drawn each time: a length and a width from 2 to 10 that differ, which give the area and the perimeter. The
  sliders run from 1 to 10. The goal accepts the two sides in either order, and the starting rectangle is not the
  answer.
- Reached by: the length and width sliders.
- Hidden: the area and perimeter readouts. The side labels stay.
- Idea used: length times width, area and perimeter.
