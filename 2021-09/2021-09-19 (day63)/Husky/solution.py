class MyCircularQueue:

    def __init__(self, k: int):
        self.k = k
        self.queue = [None]*k
        self.front = 0
        self.rear = -1

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        self.rear = (self.rear + 1) % self.k
        self.queue[self.rear] = value
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        
        if self.front == self.rear:
            self.front, self.rear = 0, -1
        else:
            self.front = (self.front + 1) % self.k
        
        return True

    def Front(self) -> int:
        return -1 if self.isEmpty() else self.queue[self.front]

    def Rear(self) -> int:
        return -1 if self.isEmpty() else self.queue[self.rear]

    def isEmpty(self) -> bool:
        return self.rear == -1

    def isFull(self) -> bool:
        return not self.isEmpty() and (self.rear + 1) % self.k == self.front


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
