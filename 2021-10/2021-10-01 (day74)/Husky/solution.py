class Solution:
    def dfs(self, graph, index, res, prefix = [0]):
        if len(graph) == index + 1:
            res.append(prefix)
            return
        
        for i in graph[index]:
            self.dfs(graph, i, res, prefix + [i])
    
    def allPathsSourceTarget(self, graph: List[List[int]], prefix = [0]) -> List[List[int]]:
        res = []
        self.dfs(graph, 0, res)

        return res
