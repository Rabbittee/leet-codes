class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n <= 1:
            return n
        nums = [0]*(n + 1)
        nums[1] = 1
        max_temp = 0
        for i in range(2, n + 1):
            if i % 2 == 0:
                nums[i] = nums[i//2]
            else:
                nums[i] = nums[i//2] + nums[i//2 + 1]
            
            if nums[i] > max_temp:
                max_temp = nums[i]
        
        return max_temp
