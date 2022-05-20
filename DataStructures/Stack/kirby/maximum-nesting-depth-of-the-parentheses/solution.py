class Solution:
    def maxDepth(self, s: str) -> int:
        stack_len, max_depth = 0, 0

        for c in s:
            if c == '(':
                stack_len += 1
                max_depth = max(max_depth, stack_len)
            if c == ')':
                stack_len -= 1
        
        return max_depth
