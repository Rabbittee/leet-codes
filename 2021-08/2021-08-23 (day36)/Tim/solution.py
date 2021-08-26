class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        min_v = 1e4
        for p in prices:
            min_v = min([min_v,p])
            tmp = p - min_v
            if tmp > res:
                res = tmp
        return res
