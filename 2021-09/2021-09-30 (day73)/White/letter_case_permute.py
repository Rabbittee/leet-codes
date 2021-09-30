class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        ans = [""]
        
        for c in s:
            if not c.isalpha():
                for i in range(len(ans)):
                    ans[i] += c
            else:
                for i in range(len(ans)):
                    ans.append(ans[i] + c.upper())
                    ans[i] += c.lower() 
        return ans