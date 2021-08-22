class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if len(trust) == 0:
            return 1 if n == 1 else -1

        m = [0]*(n + 1)
        m_ = set()
        for i, j in trust:
            m_.add(i)
            m[j] += 1

        for i in range(1, n + 1):
            if m[i] == n - 1 and i not in m_:
                return i

        return -1
