class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        l = 0
        r = len(arr) - 1
        total = sum(arr)
        if total % 3 != 0:
            return False
        
        avg = int(total/3)
        l_s, r_s = arr[l], arr[r]
        
        while l_s != avg and l < len(arr) - 2:
            l += 1
            l_s += arr[l]
        if l_s != avg:
            return False
        
        while r_s != avg and r > 1:
            r -= 1
            r_s += arr[r]
        if r_s != avg:
            return False
        
        m_s = sum(arr[l + 1: r])

        return l + 1 != r and m_s == avg
        
