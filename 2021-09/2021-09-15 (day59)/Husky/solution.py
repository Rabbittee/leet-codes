class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        for p in path.split('/'):
            if p in ('', '.'):
                continue

            if p == '..':
                if len(stack) > 0:
                    stack.pop()
                continue

            stack.append(p)

        return '/' + '/'.join(stack)
