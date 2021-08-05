class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        a = 0
        for i in range (len(nums)):
            a = target - nums[i]
            if a in nums and nums.index(a) != i:
                return [i,nums.index(a)]
        