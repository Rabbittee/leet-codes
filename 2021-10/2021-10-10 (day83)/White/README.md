# 解題想法
1. 將數字轉為字串排序，由大到小接起來
2. 光以字串排序相加的結果仍不是解答，因為字串排序為 51, 5 但加總最大應為 551
3. 以迴圈遍歷比較前後大小，若前者加總的結果小於後者，就將兩者交換以求總和最大

# leetcode 提交結果
Runtime: 105 ms, faster than 9.58% of Python3 online submissions for Largest Number.
Memory Usage: 14.4 MB, less than 5.89% of Python3 online submissions for Largest Number.