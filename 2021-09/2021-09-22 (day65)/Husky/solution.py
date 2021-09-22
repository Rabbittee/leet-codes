class Solution:
    def countBits(self, n: int) -> List[int]:
        # 1, 2, 4, 8, 16, 32
        res = [0]*(n+1)
        two_exp = 1
        for i in range(1, n + 1):
            if i == two_exp*2:
                two_exp = i
            res[i] = res[i - two_exp] + 1
            
        return res
