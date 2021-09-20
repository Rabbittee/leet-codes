class Solution:
    def maxSlidingWindow(self, nums, k):
        res = []
        queue = []

        for i, num in enumerate(nums):
            while len(queue) > 0 and num > queue[-1]:
                queue.pop()
            queue.append(num)
            
            if i >= k - 1:
                res.append(queue[0])
                if queue[0] == nums[i - k + 1]:
                    queue.pop(0)
            
        return res
