/**
 * @param {number} k
 */
function MyCircularQueue(k) {
  const queue = Array(k)
  let head = -1
  let tail = -1
  /**
   * @param {number} value
   * @return {boolean}
   */
  const enQueue = value => {
    if (isFull()) return false
    if (isEmpty()) head = 0
    queue[(tail = (tail + 1) % k)] = value
    return true
  }
  /**
   * @return {boolean}
   */
  const deQueue = () => {
    if (isEmpty()) return false
    if (head === tail) {
      head = -1
      tail = -1
      return true
    }
    head = (head + 1) % k
    return true
  }
  /**
   * @return {number}
   */
  const Front = () => {
    return isEmpty() ? -1 : queue[head]
  }
  /**
   * @return {number}
   */
  const Rear = () => {
    return isEmpty() ? -1 : queue[tail]
  }
  /**
   * @return {boolean}
   */
  const isEmpty = () => {
    if (head === -1) return true
    return false
  }
  /**
   * @return {boolean}
   */
  const isFull = () => {
    if ((head + k - 1) % k === tail) return true
    return false
  }

  return {
    enQueue,
    deQueue,
    Front,
    Rear,
    isEmpty,
    isFull,
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

var circularQueue = new MyCircularQueue(3) // 設置長度為 3
console.log('true : ', circularQueue.enQueue(1)) // 返回 true
console.log('true : ', circularQueue.enQueue(2)) // 返回 true
console.log('true : ', circularQueue.enQueue(3)) // 返回 true
console.log('false : ', circularQueue.enQueue(4)) // 隊列已滿返回 false
console.log('3 : ', circularQueue.Rear()) // 返回 3
console.log('true : ', circularQueue.isFull()) // 返回 true
console.log('true : ', circularQueue.deQueue()) // 返回 true
console.log('true : ', circularQueue.enQueue(4)) // 返回 true
console.log('4 : ', circularQueue.Rear()) // 返回 4
