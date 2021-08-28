class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True

        last = n - 1

        for i in range(n - 2, -1, -1):
            if nums[i] + i >= last:
                last = i

        return last == 0
