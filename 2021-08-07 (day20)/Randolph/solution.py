class Solution:
    def firstUniqChar(self, s: str) -> int:
        english = "abcdefghijklmnopqrstuvwxyz"
        data = []
        for i in english:
            if s.count(i) == 1:
                data.append(s.index(i))
        if data == []:
            return -1
        else:
            return min(data)
    