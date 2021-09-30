class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def perm(x, start):
            if start >= len(x):
                ans.append(x.copy())
            else:
                for i in range(start, len(x)):
                    x[start], x[i] = x[i], x[start]
                    perm(x, start+1)
                    x[start], x[i] = x[i], x[start]
        ans = []
        perm(nums, 0)
        return ans