class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        def get_path(graph, i, curr_path):
            if i==len(graph)-1:
                res.append(curr_path)
                     
            # for each i->connect to elements of graph[i]
            for elem in graph[i]:
                tmp_path = curr_path[:]
                tmp_path.append(elem)
                get_path(graph, elem, tmp_path)
                
        res = []
        get_path(graph,0,[0])
        return res
                
