class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        
        def get_til(tiles,cur,res):
            res.append(cur)
            
            for i,til in enumerate(tiles):
                tmp_cur = cur+til
                get_til(tiles[:i]+tiles[i+1:],tmp_cur,res)
                
        cur = ''
        res = []
        get_til(tiles,cur,res)        
        return len(set(res))-1
            
