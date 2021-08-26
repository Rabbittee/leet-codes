# 解題想法
1. 循序將字元存入dict, 如果是重覆的則刪除dict裡的項目，並記錄在seen清單中。
2. 比對dict裡的資料如果未在seen清單裡，代表只出現一次。

# leecode 提交結果
Runtime: 132 ms, faster than 52.43% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 14.7 MB, less than 8.53% of Python3 online submissions for First Unique Character in a String.

# 補充標準解
### 使用迴圈
```
class Solution:
    def firstUniqChar(self, s: str) -> int:
        temp = {}
        for inx, val in enumerate(s):
            if val in temp:
                temp[val] = temp[val] + 1
            else:
                temp[val] = 1

        for idx, ch in enumerate(s):
            if temp[ch] == 1:
                return idx     
        return -1
```
Runtime: 156 ms, faster than 32.77% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 14.3 MB, less than 88.40% of Python3 online submissions for First Unique Character in a String.


### 使用 collections.Counter()
```
class Solution:
    def firstUniqChar(self, s: str) -> int:
        temp = collections.Counter(s)
        for inx, val in enumerate(s):
            if temp[val] == 1:
                return inx
        return -1
```

Runtime: 96 ms, faster than 81.61% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 14.5 MB, less than 45.64% of Python3 online submissions for First Unique Character in a String.
