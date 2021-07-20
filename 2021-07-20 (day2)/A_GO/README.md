# 9. Palindrome Number

Easy

## Description

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

----

## My Thought

I have two solution,
1. break int to array every digits, than compare first end last digit till centet. 
   In this way, we need to condider two situation, it has odd length or event length.
   if odd lenth, compare till center, else compare to center and center + 1.
2. Juse reverse this int value, if reverse value equals origin value, it is a palindrome number. [soltion](Solution.cpp)

# O(n) = n