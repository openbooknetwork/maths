Each ball falls through [10](@rows) rows of pegs. At every peg it goes left or right, with even chances. The bin it lands in counts how many times it went right.

Press Start. The trail through the pegs shows where the last ball went left and where it went right. Watch the bins fill. Few balls reach the edges and most land near the middle. The bins build a bell shape.

A ball has [1,024](@paths) possible paths, all equally likely. One path reaches bin 0, and it goes left at every peg. [252](@ways-5) paths end in bin 5, the middle. The small numbers under the bins count the paths to each bin.

Tap a bin to pick it. Its chance is its paths out of all the paths:

[P(5) = C(10, 5)/2^10 = 252/1,024 ≈ 0.246](@formula-p-pick)

The line over the stacks shows how high each stack can expect to reach. The more balls fall, the closer the stacks follow it.
