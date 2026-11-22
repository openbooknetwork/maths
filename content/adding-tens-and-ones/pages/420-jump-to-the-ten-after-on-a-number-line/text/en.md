On a number line you start at the first number and split only the second number into its tens and its ones. You
add the tens first, with jumps of 10. Then you add the ones. If they take you past the ten after the number you
have reached, you add them in two jumps, as in making ten. The first jump ends exactly on the ten after, and the
second jump adds the rest of the ones.

Take `38 + 25`, and split 25 into 20 and 5. Two jumps of 10 take 38 to 48, then 58. The ten after 58 is 60, and
8 needs 2 to make 10, so you split 5 into 2 and 3. A jump of 2 lands on 60, and a jump of 3 lands on 63. So
`38 + 25 = 63`.

The jump of 2 is where the new ten comes from. It brings the 8 ones of 58 up to a full ten, so 60 has 6 tens and the
line needs no other step for the new ten.

The point is on [38](@point), and the "Size of a jump" stepper is at [10](@size).

- Press "Jump right" twice.
- Press − until the stepper reads 2, then jump once to 60.
- Press + once for 3, and jump once more.
- "Jump left" takes back your last jump, whatever its size.

Over each run of jumps a tag shows what it adds: +20, +2 and +3.
