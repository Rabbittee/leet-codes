class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for i in tokens:
            if i not in '+-*/':
                stack.append(int(i))
                continue
                
            last = stack.pop()
            prev = stack.pop()
            if i == '+':
                prev += last
            elif i == '-':
                prev -= last
            elif i == '*':
                prev *= last
            elif i == '/':
                prev /= last
                prev = int(prev)
            
            stack.append(prev)
        
        return stack[0]
