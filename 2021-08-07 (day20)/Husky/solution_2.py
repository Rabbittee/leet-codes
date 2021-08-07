class Solution:
    def firstUniqChar(self, s: str) -> int:
        uniq = []
        for i, char in enumerate(s):
            if char not in uniq:
                if char not in s[i+1:]:
                    return i
                else:
                    uniq.append(char)

        return -1