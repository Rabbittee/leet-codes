class Solution:
    def simplifyPath(self, path: str) -> str:
        ans = []
        for p in path.split('/'):
            if p == '' or p == '.':
                continue
            elif p == '..':
                if ans:
                    ans.pop()
            else:
                ans.append(p)
        return '/'+'/'.join(ans)