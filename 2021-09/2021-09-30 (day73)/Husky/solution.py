class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        a_z = 'abcdefghijklmnopqrstuvwxyz'
        res = ['']
        s = s.lower()
        for s_ in s:
            if s_ in a_z:
                res = [r+s_ for r in res] + [r+s_.upper() for r in res]
            else:
                res = [r+s_ for r in res]
                
        return res
