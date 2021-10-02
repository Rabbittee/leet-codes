class Solution:
    def dfs(self, char_count):
        res = 0
        for char in char_count.keys():
            if char_count[char] == 0:
                continue
                
            res += 1
            char_count[char] -= 1
            res += self.dfs(char_count)
            char_count[char] += 1
        return res
    
    def numTilePossibilities(self, tiles: str) -> int:
        char_count = {}
        for char in tiles:
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1
        
        return self.dfs(char_count)
