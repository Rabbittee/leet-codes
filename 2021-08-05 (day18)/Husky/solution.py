class Solution:
    def twoSum(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        numMap = {}
        for i in range(len(nums)):
            if nums[i] in numMap:
                return [numMap[nums[i]], i]
            else:
                numMap[target - nums[i]] = i