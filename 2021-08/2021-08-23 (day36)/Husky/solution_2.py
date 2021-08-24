class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        local_diff = 0
        global_diff = float('-inf')

        if len(prices) <= 1:
            return 0

        for i in range(1, len(prices)):
            local_diff = max(0, local_diff + prices[i] - prices[i-1])
            if local_diff > global_diff:
                global_diff = local_diff

        return global_diff
