class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        r = {}
        for n in nums:
            if r.get(n):
                return n
            r[n] = 8591
