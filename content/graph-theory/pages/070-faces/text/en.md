Two edges of this graph cross in the middle. Drag D into the triangle A, B, C so that no edges cross. A graph that can be drawn with no crossings is called planar.

A planar drawing cuts the box into regions called faces. Each face gets a number. The space outside the graph counts as one face too, and it gets the last number.

Count the vertices V, the edges E and the faces F, and work out V − E + F:

[V − E + F = 4 − 6 + 4 = 2](@formula-euler)

Leonhard Euler found this rule for the corners, edges and faces of solids such as a cube. It holds for every planar drawing of a graph in one piece. Add a vertex inside a face and join it to the corners, or add an edge across a face, and check that V − E + F stays 2.
