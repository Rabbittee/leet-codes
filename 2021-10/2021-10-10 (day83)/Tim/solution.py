class Solution:
    def largestNumber(self, nums: List[int]) -> str:  
        res = ''
        while len(nums)!=0:
            cur_max = '0'
            for i in nums:
                si = str(i)
                if si[0]>cur_max[0]:
                    cur_max = si
                    continue
                elif si[0]==cur_max[0]:
                    if cur_max+si<si+cur_max:
                        cur_max = si
                    continue                    
                else:
                    continue
                    
            res += cur_max
            nums.remove(int(cur_max))
            
        if res[0]=='0':
            return '0'
        return res
