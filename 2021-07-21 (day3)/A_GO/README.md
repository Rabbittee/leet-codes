# 5. Longest Palindromic Substring

Medium

## Description

Given a string s, return the longest palindromic substring in s.

----

## My Thought
First way

1. A palindromic means it is symmetry from center.
2. There is two type, odd length and even length.
3. I start loop from 0 to s.lengt();
4. And use picked char as center, start a loop to expand till bound of string.
5. It must be a palindromic or break.
6. record the length and start head position if lenght of this substring is longer than previos.
# O(n)

Second way

1. start a loop from i= 0 to s.length().
2. start a loop from j = s.length() to i.
3. if s[i+k] = s[j], let endPosition as start position of j. than k+=1;
4. if s[i+k] != s[j], let endPosition to new positin as j. k = 0 start judge from i;
5. loop till i = j, get the longest palindromic string when start position is i.
6. checkt if this time palindromic substring got is longer than previous, true than save it.
# O(n^2);