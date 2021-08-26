# 70. Climbing Stairs

`Easy`

## Description

<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

## My thought

steps to 5 equals `step 3 combinations + 2 steps `or `step 3 combiations + 1 step`.

So we can create a DP `f(n) = f(n-1) +　f(n-2)`
There is two way

1. Recursive from the end.
2. Store steps spend into an array and loop from step 3 to end, plus previous steps and more previous steps.
    `To save more menmory, we can just store 2 steps previous without whole route`

## O(N)
