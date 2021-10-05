# 解題想法
遞迴生成每個字元，至滿足長度時加入list中，最後傳回list裡第k個值。

# leetcode 提交結果
Runtime: 312 ms, faster than 6.18% of Python3 online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
Memory Usage: 17.9 MB, less than 11.24% of Python3 online submissions for The k-th Lexicographical String of All Happy Strings of Length n.

# 其他想法
每個長度的字串第一個一定是 ab 開頭，例如 長度 4  的第一個是 abab，長度 5 的第一個是 ababa ⋯⋯以此類推
先生成該長度的第一個字串，再遞迴推論出第K個，例如：長度 4 第一個 abab, 第二個 abac, 第三個 abca ⋯⋯