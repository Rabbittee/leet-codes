class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:

        if(sum(arr) % 3 != 0):
            return False
        
        part = sum(arr) // 3
        ans, tmp = 0, 0
        
        for i in arr:
            tmp += i
            if tmp == part:
                ans += 1
                tmp = 0
        
            if ans == 3:
                return True
            
        return False