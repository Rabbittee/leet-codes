class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
                
        def get_s(s,curr):
            if len(s)==0:
                res.append(curr)
                return

            if s[0].isalpha():
                # lower
                get_s(s[1:],curr+s[0].lower())
                # upper
                get_s(s[1:],curr+s[0].upper())
            else:
                get_s(s[1:],curr+s[0])

        res = []
        get_s(s,'')
        return res
        
