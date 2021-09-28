class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        ans = 0      
        for i,v in enumerate(sorted(nums)):
            if i%2 == 0:
                ans += v
        return ans
