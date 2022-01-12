import math
from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        pd = [math.inf]*(amount + 1)
        pd[0] = 0

        for coin in coins:
            for i in range(coin, amount + 1):
                pd[i] = min(pd[i], 1 + pd[i - coin])

        return -1 if math.isinf(pd[-1]) else pd[-1]
