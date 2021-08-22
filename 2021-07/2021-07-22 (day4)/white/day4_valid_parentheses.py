class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {'(':')', '[':']','{':'}'}
        stack = []
        
        for char in s:
            if char in pairs.keys():
                stack.append(char)
            elif stack:
                if pairs.get(stack.pop()) != char:
                    return False
            else:
                return False
            
        return True if not stack else False