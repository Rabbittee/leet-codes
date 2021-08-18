# First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

## Solution

-   跑兩次迴圈
    -   第一次，紀錄每個字串的出現次數
    -   第二次，根據紀錄回傳第一個只出現一次的字串，沒有找到就回傳 -1
