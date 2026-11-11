The river Pregel flowed through the city of Königsberg, round an island and on in two arms. Seven bridges joined the four pieces of land. People asked whether they could walk through the city and cross every bridge exactly once.

Here each piece of land is a vertex and each bridge is an edge. Tap a vertex to start, then tap the next one across a bridge. Each bridge you cross lights up with its number, and Undo takes back a step. Try to cross all [7](@edges).

You get stuck every time. In 1736 Leonhard Euler showed why. A walk leaves every piece of land it enters, so the bridges at a vertex pair up, one in and one out. Only the start and the end of the walk can have an odd degree. Here [4](@odd-nodes) vertices are odd, and a walk allows two at most.

Pick Remove and take away one bridge, or Join and add one. When only two vertices are odd, start at one of them, and the walk ends at the other.
