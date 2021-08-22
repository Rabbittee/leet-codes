class Solution:
    def firstUniqChar(self, s: str) -> int:
        record={}
        for i in range(len(s)):
            if record.get(s[i]) is not None:
                record[s[i]] = 1e6
            else:
                record[s[i]] = i
        return min(record.values()) if min(record.values()) < len(s) else -1
