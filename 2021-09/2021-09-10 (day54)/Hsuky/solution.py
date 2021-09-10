class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.min = None

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.min is None or self.min > val:
            self.min = val

    def pop(self) -> None:
        *stack, top = self.stack
        self.stack = stack
        if len(stack) == 0:
            self.min = None
        else:
            self.min = min(self.stack)
        return top

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
