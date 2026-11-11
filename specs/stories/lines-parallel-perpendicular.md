# `lines-parallel-perpendicular` Lines, parallel and perpendicular

- Level: beginner, building on the first ideas
- Needs: `turns-and-right-angles`
- Leads to: `quadrilaterals-and-polygons`
- Sections: point, segment, ray and line, horizontal and vertical, parallel lines, perpendicular lines
- In the world: marking out a tennis court, laying a new street on a town plan
- Figure: a board of evenly spaced dots with one to four straight lines on it. The reader drags the two points
  that set each line, and switches a line between a segment, a ray and a line. The panel says which lines are
  horizontal, vertical, parallel or perpendicular.
- Engine: new scene `lines` in `geo`. It draws up to four straight objects, each set by two draggable points that
  snap to an optional dot board, and each drawn as a segment, a ray or a line. It reports for each one whether it is
  horizontal or vertical, and for each pair whether they are parallel, meet, or meet at a right angle, marking the
  meeting point and a right angle square. The whole board can turn a quarter turn, and a spirit level and a plumb
  line can be laid on it.

## Pages

| # | Title | Kind | The figure shows | The reader does | The page says |
|---|---|---|---|---|---|
| 1 | Will the rails ever meet? | opening | Two railway rails seen from above, with sleepers across them. | Drags the end of one rail and watches whether the two rails now meet. | Rails that keep the same distance apart stay apart however far they run, and a train needs them that way. |
| 2 | A point marks a place | idea | An empty dot board. | Taps the board to place three points and drags them. | A point marks one exact place. |
| 3 | A segment joins two points | idea | Two points joined by a segment. | Drags the two ends to new places. | A segment is the straight path between two points, and it ends at both of them. |
| 4 | Rays and lines go on and on | try | One straight object with a switch for segment, ray and line. | Switches between the three and drags the two points. | A ray starts at one point and goes on without end, and a line goes on without end both ways. |
| 5 | A ray reaches further | use | A segment that stops short of a target dot, with the same switch. | Switches the segment to a ray and then to a line. | A ray or a line can reach a place that a segment between the same points stops short of. |
| 6 | Horizontal like the sea | idea | A segment over a picture of the sea and the sky. | Drags one end until the segment lies level with the edge of the sea. | A horizontal line runs level, like the line where the sea meets the sky. |
| 7 | Vertical like a plumb line | try | A plumb line, a weight on a string, hanging beside a segment. | Drags the segment until it runs along the plumb line. | A vertical line runs straight up and down, the way a hanging weight pulls its string. |
| 8 | Turn the board | use | A horizontal and a vertical segment on a board that turns. | Turns the board a quarter turn and watches the two names swap. | Horizontal and vertical depend on which way is up. |
| 9 | Parallel lines keep apart | idea | Two lines with the gap between them marked at both ends of the board. | Drags one line until the two gaps are equal. | Two lines are parallel when they run the same way and keep the same distance apart. |
| 10 | Lines that are not parallel meet | try | Two lines that are nearly parallel, with their meeting point marked even when it is off the board. | Turns one line a little each way and follows the meeting point. | Two lines that are not parallel meet somewhere, sometimes far off the page. |
| 11 | A parallel line through a point | use | A line and a dot away from it, with a second line through the dot. | Drags the second line's other point until the two lines are parallel. | Through a point off a line there is one line parallel to it. |
| 12 | Perpendicular lines meet square | idea | Two lines that cross. | Turns one line until a right angle square appears where they cross. | Two lines are perpendicular when they meet at a right angle. |
| 13 | Some crossings are square | try | The same two lines with the panel naming them. | Drags one line through many directions and watches when the panel says meet and when it says perpendicular. | Most crossing lines meet at corners that are not right angles, and a horizontal and a vertical line are always perpendicular. |
| 14 | Two perpendiculars make parallels | use | A base line and two lines that cross it. | Turns each crossing line until it is perpendicular to the base line. | Two lines perpendicular to the same line are parallel to each other. |
| 15 | Mark out a tennis court | world | A tennis court with some of its lines missing. | Drags the missing lines into place until the panel says the sides are parallel and the ends are perpendicular to them. | A tennis court is marked with pairs of parallel lines that meet the other lines at right angles. |
| 16 | Lay a new street | world | A town plan of streets with a gap where a new street is planned. | Drags the new street so it runs parallel to High Street and meets Station Road at a right angle. | Town planners lay many streets parallel or perpendicular to each other so the blocks between them are square. |
| 17 | Draw a line parallel to this one | challenge | A fixed line, a dot off it and a second line through the dot. | Drags the second line's free point to another dot. | The second line is parallel to the fixed line. |
| 18 | Draw a line perpendicular to this one | challenge | A fixed line, a dot on the board and a second line through the dot. | Drags the second line's free point. | The second line is perpendicular to the fixed line. |
| 19 | Make one parallel and one perpendicular | challenge | A fixed line, a segment and a ray. | Drags the ends of the segment and the start and direction of the ray. | The segment is parallel to the line and the ray starts on the segment and meets the line at a right angle. |
| 20 | Where lines go next | end | Two pairs of parallel lines crossing to make a four-sided shape. | Drags one line and watches the shape between them change. | `quadrilaterals-and-polygons` names the shapes that parallel and perpendicular sides make. |

## Challenges

### Draw a line parallel to this one
- Goal: the reader's line is parallel to the fixed line.
- Drawn each time: the fixed line through two dots, with a direction drawn from steps of 0 to 4 dots across and
  0 to 4 dots up or down, not both 0, so horizontal and vertical are included, and a dot off the line for the second line to pass
  through. The board leaves room for a parallel through that dot to reach a second dot. The second line starts in a
  direction that is not parallel.
- Reached by: dragging the free point of the second line between dots.
- Hidden: the parallel label and the gap marks.
- Idea used: parallel lines.

### Draw a line perpendicular to this one
- Goal: the reader's line is perpendicular to the fixed line.
- Drawn each time: the fixed line with a direction of 1 to 3 dots across and 1 to 3 dots up. A perpendicular then
  runs as many dots across as the fixed line runs up and as many dots down as it runs across, so it passes through
  dots. The second line starts through a drawn dot at a direction that is not perpendicular, and the board leaves
  room for the perpendicular through that dot to reach a second dot.
- Reached by: dragging the free point of the second line.
- Hidden: the right angle square and the perpendicular label.
- Idea used: perpendicular lines.

### Make one parallel and one perpendicular
- Goal: the segment lies off the fixed line and is parallel to it, and the ray starts on the segment and meets the fixed line at a
  right angle.
- Drawn each time: the direction and place of the fixed line, drawn as in the challenges above, with room on the
  board for a parallel segment at least three dots long. The segment and the ray start in directions that fail both
  conditions.
- Reached by: dragging the two ends of the segment, the start point of the ray and its direction point.
- Hidden: every label and mark on the panel and the board.
- Idea used: segment, ray and line, parallel lines, perpendicular lines.
