class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}
        for i in range(len(nums)):
            toFind = target - nums[i]
            if toFind in record.keys():
                return [record[toFind], i]
            record[nums[i]] = i
