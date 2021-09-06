class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        hash_count = {}
        half = len(nums)//2
        for n in nums:
            if n in hash_count:
                hash_count[n] += 1
                if hash_count[n] > half:
                    return n
            else:
                hash_count[n] = 1
