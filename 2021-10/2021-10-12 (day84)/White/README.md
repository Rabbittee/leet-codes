# 解題想法
1. 分成三等份，則總和一定能被3整除，若不能整除者就是 false
2. 從頭開始相加，每等於一等份時就歸零重計
3. 只要結果至三份時就回傳 true，避開總合為 0 時結果超出 3 的情況

# leetcode 提交結果
Runtime: 615 ms, faster than 5.10% of Python3 online submissions for Partition Array Into Three Parts With Equal Sum.
Memory Usage: 21 MB, less than 64.29% of Python3 online submissions for Partition Array Into Three Parts With Equal Sum.