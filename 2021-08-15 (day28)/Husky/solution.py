class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        replaceIndex = 1
        for i in range(1, n):
            if nums[i - 1] != nums[i]:
                nums[replaceIndex] = nums[i]
                replaceIndex += 1

        return replaceIndex
