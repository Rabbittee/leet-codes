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
