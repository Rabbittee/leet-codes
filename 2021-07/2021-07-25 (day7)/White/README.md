# 解題想法
1. 兩個list因為是已排序，所以可以從頭開始做比較，放入新list中。
2. 兩個list需要有各自的指標。
3. 其中一個list比完後，剩下的直接放入新list尾端。
4. 想直接用 .sort() 但似乎算犯規（？）

# leecode 提交結果
Runtime: 88 ms, faster than 85.13% of Python3 online submissions for Median of Two Sorted Arrays.
Memory Usage: 14.5 MB, less than 80.66% of Python3 online submissions for Median of Two Sorted Arrays.