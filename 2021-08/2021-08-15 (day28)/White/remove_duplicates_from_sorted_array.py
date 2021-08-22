class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        for n in range(len(nums)):
            if nums[n] != nums[i]:
                i += 1
                nums[i] = nums[n]
        return i+1
