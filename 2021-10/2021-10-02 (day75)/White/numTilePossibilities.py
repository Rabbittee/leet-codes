class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        counter = Counter(tiles)
        chars = set(counter)         
        global ans
        ans = 0
        
        def dfs(counter):
            global ans
            for c in chars:
                if counter[c] == 0:             
                    continue 
                counter[c] -= 1
                ans += 1
                dfs(counter)
                counter[c] += 1
            return ans
        
        return dfs(counter)