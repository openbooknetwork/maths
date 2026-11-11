A prime number has exactly two factors, 1 and itself. 1 has only one factor, so it is not prime. The sieve of Eratosthenes finds every prime up to 100 without dividing anything.

Move the slider one step to the right. 2 is prime, so it stays, and every larger multiple of 2 is crossed out. The smallest number left after that is 3, which is prime. Move the slider again, and the multiples of 3 go. Then come 5 and 7.

When a prime passes over a number that is crossed out already, the number jumps. 6 goes with the multiples of 2, and 3 finds it gone.

So far [0](@crossed) numbers are crossed out and [99](@standing) are still standing. After 7 the sieve can stop. A number up to 100 that is not prime has a factor of 10 or less, so it is a multiple of 2, 3, 5 or 7. The numbers left standing are the [25](@count-primes) primes below 100, and they turn purple.
