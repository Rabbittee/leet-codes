# 解題想法
使用stack模擬路徑，遇到`..`時模擬往上一層（即pop），遇到資料夾名稱則加入stack，最後使用加上 `/` 輸出。

# leecode 提交結果
Runtime: 28 ms, faster than 91.27% of Python3 online submissions for Simplify Path.
Memory Usage: 14.5 MB, less than 14.67% of Python3 online submissions for Simplify Path.