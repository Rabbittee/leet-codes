class MyCircularQueue {
    queue: number[];
    maxSize: number;
    front: number;
    rear: number;
  
    constructor(k: number) {
      this.queue = new Array(k);
      this.maxSize = k;
      this.front = 0;
      this.rear = -1;
    }
  
    enQueue(value: number): boolean {
      if (this.isFull()) return false;
      this.rear = (this.rear + 1) % this.maxSize;
      this.queue[this.rear] = value;
      return true;
    }
  
    deQueue(): boolean {
      if (this.isEmpty()) return false;
      
      // reset queue when front === rear means remain in queue is the last one
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.maxSize;
      }
      return true;
    }
  
    Front(): number {
      return this.isEmpty() ? -1 : this.queue[this.front];
    }
  
    Rear(): number {
      return this.isEmpty() ? -1 : this.queue[this.rear];
    }
  
    isEmpty(): boolean {
      return this.rear === -1;
    }
    
    isFull(): boolean {
      return !this.isEmpty() && (this.rear + 1) % this.maxSize === this.front;
    }
  }
  
  /**
   * Your MyCircularQueue object will be instantiated and called as such:
   * var obj = new MyCircularQueue(k)
   * var param_1 = obj.enQueue(value)
   * var param_2 = obj.deQueue()
   * var param_3 = obj.Front()
   * var param_4 = obj.Rear()
   * var param_5 = obj.isEmpty()
   * var param_6 = obj.isFull()
   */