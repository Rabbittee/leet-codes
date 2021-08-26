# 387. First Unique Character in a String

Easy

## Description

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

## My Thoghts

Use a map to store count of char and a queue to store index of char.
If the char is repeat, pop one out of queue and check till front is not repeat.

## O(N)