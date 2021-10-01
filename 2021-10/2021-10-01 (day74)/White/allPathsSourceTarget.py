class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        def dfs(inx, temp):
            if inx == len(graph) -1: 
                ans.append(temp)
            else:
                for x in graph[inx]: 
                    dfs(x, temp + [x])
        ans = []
        dfs(0, [0])
        return ans
