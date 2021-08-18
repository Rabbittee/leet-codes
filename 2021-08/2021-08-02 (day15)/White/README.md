# 解題想法
1. 建立一個空的 singly-linked list 用來存 answer
2. 使用 temp 做為 answer 的指標
3. 比較 l1, l2，小的節點加到 temp 裡，其中一個 list 用完後，另一個 list 剩下的部份一定比較大，直接接起來
4. 最後傳回時注意傳回的為 answer.next，而非 answer 本身

# leecode 提交結果
Runtime: 28 ms, faster than 98.17% of Python3 online submissions for Merge Two Sorted Lists.
Memory Usage: 14.2 MB, less than 62.43% of Python3 online submissions for Merge Two Sorted Lists.

# 時間複雜度
O(m+n)