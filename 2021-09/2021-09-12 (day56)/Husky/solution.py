class Solution:
    def calculate(self, s: str) -> int:
        s = s.replace(' ', '')
        for s_ in '+-*/':
            s = s.replace(s_, ',' + s_ + ',')
            
        stack = s.split(',')

        for i in range(len(stack)):
            if stack[i] == '*':
                temp = int(stack[i - 1])*int(stack[i + 1])
                stack[i - 1], stack[i], stack[i + 1] = None, None, temp
            if stack[i] == '/':
                temp = int(int(stack[i - 1])/int(stack[i + 1]))
                stack[i - 1], stack[i], stack[i + 1] = None, None, temp
        
        stack = [s_ for s_ in stack if s_ is not None]
        for i in range(len(stack)):
            if stack[i] == '+':
                temp = int(stack[i - 1]) + int(stack[i + 1])
                stack[i - 1], stack[i], stack[i + 1] = None, None, temp
            if stack[i] == '-':
                temp = int(stack[i - 1]) - int(stack[i + 1])
                stack[i - 1], stack[i], stack[i + 1] = None, None, temp
                
        return stack[-1]
