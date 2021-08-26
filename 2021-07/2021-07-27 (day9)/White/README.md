# 解題想法
1. 逐一檢查有無下一個node，和下一個node比較val是否相同
2. 失去link的node即不存在於list
3. 測試資料裡有陷阱 []，用了哈奇之前教的early return 避開

# leecode 提交結果
Runtime: 44 ms, faster than 57.80% of Python3 online submissions for Remove Duplicates from Sorted List.
Memory Usage: 14.2 MB, less than 81.15% of Python3 online submissions for Remove Duplicates from Sorted List.

# 時間複雜度
O(n)