class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        val = {'(':1,')':-1}
        def isvalid(cur):
            a = 0
            for p in cur:
                a += val[p]
                if a<0:
                    return False
            return True
        
        def gen_parenthesis(pool, cur, res):
            if not pool:
                if isvalid(cur+')'):
                    #if not cur+')' in res: 
                    res.append(cur+')')
                return
            
            for p in set(pool):
                new_cur = cur + p
                if not isvalid(new_cur):
                    continue
                new_pool = pool[:]
                new_pool.remove(p)
                gen_parenthesis(new_pool,new_cur,res)
        
        pool = [i for i in '()'*(n-1)]
        res = []
        cur = '('
        gen_parenthesis(pool,cur,res)
        return res
