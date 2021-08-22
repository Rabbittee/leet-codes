class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1 and len(trust) == 0:
            return 1
        record = {}
        for bi in [trust[i][1] for i in range(len(trust))]:
            record[bi] = []
        for [ai, bi] in trust:
            if record.get(ai) is not None:
                del record[ai]
            if record.get(bi) is None:
                continue
            record[bi].append(ai)
        for key in record.keys():
            if sum(record[key]) == sum(range(n+1))-key:
                return key
        return -1
