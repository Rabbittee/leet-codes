class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums.sort()
        i = 0
        for j in range(1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
            i += 1