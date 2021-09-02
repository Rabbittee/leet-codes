from math import sqrt


class Solution:
    def divisorGame(self, n: int, dp={}, isAlice: bool = True) -> bool:
        if n <= 3:
            return ((n == 2) + isAlice) % 2 == 0

        key = f'{isAlice}:{n}'
        if key in dp:
            return dp[key]

        ans = not isAlice
        for x in range(1, int(sqrt(n)) + 1):
            if n % x != 0:
                continue

            isWin = self.divisorGame(n - x, dp, not isAlice)

            if isAlice:
                ans |= isWin
            else:
                ans &= isWin

        dp[key] = ans
        return dp[key]
