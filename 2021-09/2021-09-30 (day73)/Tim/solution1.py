class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        
        res = ['']
        for ss in s:
            if ss.isalpha():
                res_duplicated = res[:]
                for i in range(len(res)):
                    res[i] += ss.lower()
                    res_duplicated[i] += ss.upper()
                res += res_duplicated
                 
            else:
                for i in range(len(res)):
                    res[i] += ss
                    
        return res
