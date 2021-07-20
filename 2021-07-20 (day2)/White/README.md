# 解題想法
1. 回文的特徵是左右對稱。
2. 先排除負數及單一字元的狀況：負數一定不是回文，單一字元一定是回文。
3. 把int轉成str後切對半，注意奇數長度與偶數長度切的位置不同。
4. 切好後再取左半部與反轉後的右半部做比較。


# leecode 提交結果
Runtime: 52 ms, faster than 90.29% of Python3 online submissions for Palindrome Number.
Memory Usage: 14.1 MB, less than 76.80% of Python3 online submissions for Palindrome Number.