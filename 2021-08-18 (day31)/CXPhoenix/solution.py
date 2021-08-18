class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        record = {}
        for num in nums:
            if record.get(num):
                del record[num]
                continue
            record[num] = True
        return list(record.keys())[0]
