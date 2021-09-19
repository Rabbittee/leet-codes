// Method 1 without circular queue idea
// The front site always fixed and rear keep change to modify the queue.
var MyCircularQueue = function(k) {
    this.queue = [];
    this.capacity = k;
    this.front = 0;
    this.rear = -1;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.queue.length + 1 > this.capacity) {
        return false;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue.push(value);
    
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.queue.length) {
        this.queue.shift();
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        
        return true;
    }
    this.rear = -1;
    return false;
};

MyCircularQueue.prototype.Front = function() {
    return this.queue.length ?  this.queue[this.front] : -1;
};

MyCircularQueue.prototype.Rear = function() {
    return this.queue.length ?  this.queue[this.rear] : -1;
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.capacity;
};


// Method 2 with circular queue idea
// I add a new prototype function named "remainElementCount" to get the remain element of queue

var MyCircularQueue = function(k) {
    this.queue = [];
    this.capacity = k;
    this.front = 0;
    this.rear = -1;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value; 
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity; 
    return true;
};
MyCircularQueue.prototype.Front = function() {
    return this.queue[this.front] === undefined ? -1 : this.queue[this.front]
};

MyCircularQueue.prototype.Rear = function() {
    return this.queue[this.rear] === undefined ? -1 : this.queue[this.rear]
};

MyCircularQueue.prototype.isEmpty = function() {
   return this.remainElementCount() === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.remainElementCount() === this.capacity;
};

MyCircularQueue.prototype.remainElementCount = function() {
    let count = 0;
    for (let i = 0 ; i < this.queue.length ; i++) {
        if (this.queue[i] !== undefined) {
            count++;
        }
    }
    return count;
}