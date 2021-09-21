/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.max = k;
    this.count = 0;
    this.setNext = target => (target + 1 >= this.max ? 0 : target + 1);
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;
    this.queue[this.rear] = value;
    this.rear = this.setNext(this.rear);
    this.count += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;
    this.front = this.setNext(this.front);
    this.count -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.count === 0) return -1;
    return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.count === 0) return -1;
    return this.queue[this.rear === 0 ? this.max - 1 : this.rear - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.count === this.max;
};
