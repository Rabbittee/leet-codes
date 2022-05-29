type MyCircularQueue struct {
    data []int
    front, rear, length int
}


func Constructor(k int) MyCircularQueue {
    return MyCircularQueue{
        data: make([]int, k),
        length: 0,
        rear: -1,
        front: 0,
	}
}


func (this *MyCircularQueue) EnQueue(value int) bool {
    if this.IsFull() { return false }
    
    this.rear = (this.rear + 1) % cap(this.data)
    this.data[this.rear] = value
    this.length += 1
    return true;
}


func (this *MyCircularQueue) DeQueue() bool {
    if this.IsEmpty() { return false }

    this.front = (this.front + 1) % cap(this.data)
    this.length -= 1
    return true
}


func (this *MyCircularQueue) Front() int {
    if this.IsEmpty() {
        return -1
    }
    return this.data[this.front]
}


func (this *MyCircularQueue) Rear() int {
    if this.IsEmpty() {
        return -1
    }

    return this.data[this.rear]
}


func (this *MyCircularQueue) IsEmpty() bool {
    return this.length == 0
}


func (this *MyCircularQueue) IsFull() bool {
    return this.length == cap(this.data)
}


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.EnQueue(value);
 * param_2 := obj.DeQueue();
 * param_3 := obj.Front();
 * param_4 := obj.Rear();
 * param_5 := obj.IsEmpty();
 * param_6 := obj.IsFull();
 */