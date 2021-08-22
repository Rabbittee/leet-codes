class Solution:
    def singleNumber(self, nums: List[int]) -> int:   
        arr = {}
        for i in nums:
            if i in arr.keys():
                arr[i] = arr[i] + 1
            else:
                arr[i] = 1
        
        res = [key for key, val in arr.items() if val == 1]
        return res[0]