class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}
        for i in range(len(nums)):
            toFind = target - nums[i]
            try:
                return [record[toFind], i]
            except:
                record[nums[i]] = i
