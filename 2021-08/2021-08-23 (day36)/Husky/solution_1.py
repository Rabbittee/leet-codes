class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        valley = 10**4 + 1
        max_ = 0

        for i in range(0, len(prices)):
            if prices[i] < valley:
                valley = prices[i]
            elif (prices[i] - valley) > max_:
                max_ = prices[i] - valley
        return max_
