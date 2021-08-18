class Solution:
    def firstUniqChar(self, s: str) -> int:
        temp = {}
        seen = []
        for inx, val in enumerate(s):
            if val in temp:
                del(temp[val])
                seen.append(val)
            else:
                temp[val] = inx

        for tinx, tval in enumerate(temp):
            if tval not in seen:
                return temp[tval]
        return -1