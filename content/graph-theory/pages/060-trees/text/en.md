A tree is a graph in one piece with no loops. Between any two of its vertices there is exactly one route.

The lit edges lie on a loop. Pick Remove and take edges away until no loop is left, and keep the graph in one piece. When it becomes a tree, the page says so and the tree lights up.

A tree with V vertices has V − 1 edges. This graph has [10](@edges) edges and [7](@nodes) vertices, so this many edges have to go:

[E − (V − 1) = 10 − (7 − 1) = 4](@formula-tree)

Remove an edge that is not lit and the graph falls into two pieces. Then grow the tree. Add a vertex and join it with one edge. Both counts go up by one, and the rule still holds.
