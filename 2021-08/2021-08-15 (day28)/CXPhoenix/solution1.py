class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 1
        count = 1
        while i < len(nums):
            if nums[i] in nums[:i]:
                del(nums[i])
                continue
            count += 1
            i += 1
        return count
