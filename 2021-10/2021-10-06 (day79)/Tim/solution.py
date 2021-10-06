class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        lenf = len(flowerbed)
        flowerbed = [0] + flowerbed + [0]
        i = 1
        num = 0
        
        while i<=lenf:
            if flowerbed[i-1]==flowerbed[i]==flowerbed[i+1]==0:
                num += 1
                i += 2
                continue
            i += 1
        
        return num>=n
