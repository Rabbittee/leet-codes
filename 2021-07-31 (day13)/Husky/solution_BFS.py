from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        length = len(nums)
        farthest = 0
        step = 0
        end = 0
        start = 0

        while(end < len(nums) -1):
            step += 1
            farthest = end + 1
            for i in range(start, end + 1):
                if i + nums[i] >= length - 1:
                    return step

                farthest = max(farthest, i + nums[i])

            start = end + 1
            end = farthest

        return step