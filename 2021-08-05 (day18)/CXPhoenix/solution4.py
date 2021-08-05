class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}
        for i in range(len(nums)):
            toFind = target - nums[i]
            try:
                return [i, record[toFind]] if i <= record[toFind] else [record[toFind], i]
            except:
                record[nums[i]] = i
