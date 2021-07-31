# 45. Jump Game II

Medium

## Description

Given an array of non-negative integers `nums`, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

## My Thoghts

First I tried to use DP with a recursivei function.
But it is too slow so that time out occur.
So I change to use loop.
1. init an array as same length as nums.
2. Lopp every index in nums.
3. Start from index, check step it can reached.
4. Replace step cost index reached index if it is smaller than old one,
5. return steps record in array.
   
I tried use greedy, it is faster than DP.
## O(n^2) DP
## O(n) greedy