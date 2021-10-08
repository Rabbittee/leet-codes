# 解題想法
1. 先統計出各字元的數量
2. 如果大於2的奇數，則只取2的倍數部份，例如 5 取 4： 5//2*2 = 4
3. 若ans為偶數則可將捨去的1加回

# leetcode 提交結果
Runtime: 32 ms, faster than 80.32% of Python3 online submissions for Longest Palindrome.
Memory Usage: 14.3 MB, less than 22.92% of Python3 online submissions for Longest Palindrome.