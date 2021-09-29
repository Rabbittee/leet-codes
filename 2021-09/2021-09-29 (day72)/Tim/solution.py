class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        def add_num(rem,curr,res):
            if rem==[]:
                res.append(curr)
                return
                
            for i in rem:
                tmp_curr = curr[:]
                tmp_rem = rem[:]
                tmp_curr.append(i)
                tmp_rem.remove(i)
                add_num(tmp_rem,tmp_curr,res)
                
        curr = []
        res = []
        add_num(nums,curr,res)
        return res
