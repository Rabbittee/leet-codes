# 解題想法
1. solution 提示裡把 list 從中間拆成兩個 list，再合併排序。
2. 丟進合併排序前兩個 list 各自排序過再丟入合併排序。
3. 合併排序用的是 day15 練習的code。

# leecode 提交結果
Runtime: 480 ms, faster than 48.96% of Python3 online submissions for Sort List.
Memory Usage: 30.1 MB, less than 73.56% of Python3 online submissions for Sort List.

照官方 solution 的影片示意，正確解法在丟進合併排序前應該不用先排序，可能是沒有遵照作法速度才這麼慢。
