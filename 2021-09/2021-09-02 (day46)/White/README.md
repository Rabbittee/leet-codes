# 解題想法
取得s清單的統計結果，再以t清單內容比對，相符的字元計數減1，最後判斷結果是否為空。

# leecode 提交結果
Runtime: 55 ms, faster than 37.95% of Python3 online submissions for Valid Anagram.
Memory Usage: 14.3 MB, less than 95.43% of Python3 online submissions for Valid Anagram.

# sorted解
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
```

# Counter解
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
```
