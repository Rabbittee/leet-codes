class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for value in tokens:
            # 不是運算符就把值轉成 int 存進 stack 裡
            if value not in "+-*/":
                stack.append(int(value))
            # 防止第二的值就是運算符的防呆
            elif len(stack) > 1:
                # 遇到運算符的時候，取得堆疊最上面兩個值進行運算
                num2 = stack.pop()
                num1 = stack.pop()

                if value == '+':
                    stack.append(num1 + num2)
                elif value == '-':
                    stack.append(num1 - num2)
                elif value == '*':
                    stack.append(num1 * num2)
                elif value == '/':
                    # 題目要求除法取整數就好
                    stack.append(int(num1 / num2))

        return stack[-1]
