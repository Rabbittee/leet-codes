class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        only = set()

        for n in nums:
            if n in only:
                only.remove(n)
            else:
                only.add(n)

        return only.pop()