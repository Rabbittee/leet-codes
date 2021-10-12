class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        s = sum(arr)/3
        if int(s)!=s:
            return False
        
        cur_sum = 0
        n = 0
        while arr:
            cur_sum += arr.pop()
            if cur_sum==s:
                cur_sum = 0
                n += 1
                
        return cur_sum==0 and n>=3
        
