# 1. Two Sum
Easy


## Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## My Thoghts

Use a map to store value as key and index as value.
minus nums[i] and use this value as key to get index of another one.

`Aware` need to check if and prevent sum is 2*num[i]
## O(n)