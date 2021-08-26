class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        
        Sum = 0
        for i in nums:
            Sum += i
        return sum(range(len(nums)+1))-Sum
                
