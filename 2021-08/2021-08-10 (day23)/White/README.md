# 解題想法
1. 二元樹使用中序走訪會得到排序好的結果。
2. 使用遞迴將中序走訪取得的結果加入list。
3. 將中序走訪的結果list和 sorted(list)的結果比較，相同即為true。
4. 因二元樹不可以有相同值的節點，故加入set做比較。

# leecode 提交結果
Runtime: 44 ms, faster than 69.67% of Python3 online submissions for Validate Binary Search Tree.
Memory Usage: 17.8 MB, less than 7.19% of Python3 online submissions for Validate Binary Search Tree.
