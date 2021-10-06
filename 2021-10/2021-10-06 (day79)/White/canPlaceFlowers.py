class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0 or (len(flowerbed) == 1 and flowerbed[0] == 0):
            return True
           
        for i,v in enumerate(flowerbed):
            if v == 1:
                continue
                
            if i == 0:
                if(flowerbed[i+1] == 0):
                    flowerbed[i] = 1
                    n -= 1
                    continue
                    
            if(i == len(flowerbed) -1):
                if(flowerbed[i-1] == 0):
                    flowerbed[i] = 1
                    n -= 1
                    break
            
            if(flowerbed[i-1]==0 and flowerbed[i+1]==0):
                flowerbed[i] = 1
                n -= 1
                        
            if(n==0):
                return True

        return n <= 0 
                