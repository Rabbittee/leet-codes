class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        # 貪婪算法：排序胃口跟餅乾
        g.sort()
        s.sort()

        # 可以餵飽的小孩數量
        res = 0
        
        # 遍歷所有餅乾
        for i in range(len(s)):
            # 如果可餵飽的數量小於小孩總數，且餅乾大小大於下一個小孩的胃口。則餵飽數量 +1
            if res < len(g) and s[i] >= g[res]:
                res += 1
            else:
                break
        return res
