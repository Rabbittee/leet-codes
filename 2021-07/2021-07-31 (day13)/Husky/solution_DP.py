from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        length = len(nums)
        if length == 1:
            return 0

        steps = [length]*length
        for i, v in enumerate(nums[:-1]):
            for j in range(1, v + 1):
                if i + j>= length:
                    continue
                steps[i + j] = min(steps[i] + 1, steps[i + j], i + 1)
        return steps[-1]


solution = Solution()

for input in [
        [2,3,1,1,4],
        [2,3,0,1,4],
        [1,2,1,1,1],
        [0]
    ]:
    ans = solution.jump(input)
    print(ans)