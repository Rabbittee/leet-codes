class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res = set()
        for i in nums:
            if i in res:
                res.remove(i)
            else:
                res.add(i)
        return list(res)[0]
