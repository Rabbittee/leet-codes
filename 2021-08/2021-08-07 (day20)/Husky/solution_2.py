class Solution:
    def firstUniqChar(self, s: str) -> int:
        uniq = set()
        for i, char in enumerate(s):
            if char not in uniq:
                if char not in s[i+1:]:
                    return i
                else:
                    uniq.add(char)

        return -1