# Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Solution

解法都是建立一個 "排序過的字串" 當作對象來比較

-   解法一 做一個陣列，拿來跑迴圈比較
-   解法二 做一個物件，直接取值比較
