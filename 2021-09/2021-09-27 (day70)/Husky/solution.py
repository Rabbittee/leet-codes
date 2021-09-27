class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        right = nums[0]
        max_sum = nums[0]
        
        for n in nums[1:]:
            right = max(n, right + n)
            max_sum = max(max_sum, right)
            
        return max_sum
