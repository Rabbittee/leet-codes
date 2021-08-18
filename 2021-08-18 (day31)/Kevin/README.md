# Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Solution

1. Create a `Set`, `set` or `delete` value while looping. 
    - The method (`set` or `delete`) depends on the value whether existing in the `Set`.
2. return the only value after looping.
    - Due to the constraints says "Each element in the array appears twice except for one element which appears only once."


## Submissions

Runtime: 72 ms, faster than 96.17% of JavaScript online submissions for Single Number.
Memory Usage: 43.9 MB, less than 36.12% of JavaScript online submissions for Single Number.