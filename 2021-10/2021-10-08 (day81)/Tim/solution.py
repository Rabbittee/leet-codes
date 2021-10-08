class Solution:
    def balancedStringSplit(self, s: str) -> int:
        table = {'L':1,'R':-1}
        
        res = 0
        curr_val = 0
        tmp_num = 0
        for i in s:
            curr_val += table[i]
            tmp_num += 1
            if tmp_num!=0 and curr_val==0:
                # add one and reset status
                res += 1
                curr_val = 0
                tmp_num = 0
            
        return res
