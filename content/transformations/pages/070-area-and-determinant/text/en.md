The shaded square has corners (0, 0), (1, 0), (1, 1) and (0, 1), so its area is 1. The matrix turns it into a parallelogram with sides i and j, and turns every square of the grid into a copy of that parallelogram.

At the start i = (2, 0) and j = (1, 2). The parallelogram has a base of 2 and a height of 2, so its area is 4, and every shape on the plane, the F too, has its area multiplied by 4. The area of the parallelogram is now [4](@area).

That number is the determinant of A, and it comes straight from the four entries:

[det A = ad − bc = 2 × 2 − 1 × 0 = 4](@formula-det)

Drag j towards i. The parallelogram gets thinner and the determinant shrinks. When i and j lie on one line, the plane is squashed flat and det A = 0.

Keep going until j passes to the other side of i. The determinant turns negative, the square changes colour and the F reads backwards. The plane has turned over. Without its minus sign, the determinant is still the area.
