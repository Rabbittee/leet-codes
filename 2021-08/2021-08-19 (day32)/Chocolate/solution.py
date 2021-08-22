class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        a = len(nums)+1
        Sum = 0
        for i in nums:
            Sum += i
        return sum(range(a))-Sum