# First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

# Solution

- 用迴圈找出a-z中只出現過一次的字母 並將其在s裡的索引值推入data串列裡
- 在判斷data串列是否為空 若是則返回-1 若不是則返回data串列中的最小值