class MinStack:
    def __init__(self):
        self.stack = []         # 全部堆疊
        self.mins_stack = []    # 最小元素的堆疊

    # 在堆疊中加入新元素
    def push(self, val: int) -> None:
        self.stack.append(val)

        '''
        如果最小元素堆疊不存在，或是新進元素小於等於目前最小堆疊最上面的元素
        就把元素加入最小元素堆疊
        '''
        if not self.mins_stack or val <= self.mins_stack[-1]: 
            self.mins_stack.append(val)

    # 移除堆疊最上面的元素
    def pop(self) -> None:

        '''
        如果堆疊最上面的元素等於當前最小元素最上面一筆
        就移除該筆最小元素
        '''
        if self.stack.pop() == self.mins_stack[-1]:
            
            self.mins_stack.pop()
    
    # 取得堆疊最上面的元素
    def top(self) -> int:
        return self.stack[-1]
    
    # 取得堆疊中最小的元素
    def getMin(self) -> int:
        return self.mins_stack[-1]
