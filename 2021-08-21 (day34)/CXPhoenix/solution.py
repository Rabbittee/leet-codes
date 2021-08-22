class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        sortNums = sorted(nums)
        get = []
        for _ in range(k):
            get.append(sortNums.pop())
        return get[-1]