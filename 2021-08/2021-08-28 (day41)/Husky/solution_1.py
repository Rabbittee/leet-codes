class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True

        s_i = n
        flag = False
        for i in range(n - 2, -1, -1):
            curr = nums[i]
            if curr == 0 and not flag:
                flag = True
                s_i = i
                continue

            if flag and (curr > s_i - i or s_i - i == n - 1):
                flag = False

        return not flag
