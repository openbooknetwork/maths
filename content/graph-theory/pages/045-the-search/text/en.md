A computer finds the shortest route by searching out from the start, [A](@from), one vertex at a time. Drag the slider to the right and follow the search.

At first only the start has a distance, which is 0. Every other vertex shows ∞, because no route to it is known yet. A dashed number is the shortest distance found so far, and it can still drop.

Each step settles the nearest vertex that is not settled yet. Its number becomes solid, and that distance is final. Then the search tries each edge out of that vertex, and those edges light up. When an edge gives a neighbour a shorter distance, the number beside that neighbour drops.

The route lights up once the search settles its end, [G](@to). Edsger Dijkstra found this method in 1956. Map apps and the routers that carry messages across the internet use searches built on it.

Tap a vertex to start a new search there, then tap the vertex where the route ends.
