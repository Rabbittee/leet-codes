/**
 * @param {number} k
 */
function MyCircularQueue(k) {
  const array = Array(k);
  let front = 0;
  let rear = -1;
  let size = 0;

  /**
   * @param {number} value
   * @return {boolean}
   */
  function enQueue(value) {
    if (isFull()) return false;

    rear = (rear + 1) % k;
    array[rear] = value;
    size += 1;
    return true;
  }

  /**
   * @return {boolean}
   */
  function deQueue() {
    if (isEmpty()) return false;

    front = (front + 1) % k;
    size -= 1;
    return true;
  }

  /**
   * @return {number}
   */
  function Front() {
    return isEmpty() ? -1 : array[front];
  }

  /**
   * @return {number}
   */
  function Rear() {
    return isEmpty() ? -1 : array[rear];
  }

  /**
   * @return {boolean}
   */
  function isEmpty() {
    return size === 0;
  }

  /**
   * @return {boolean}
   */
  function isFull() {
    return size === k;
  }

  return {
    enQueue,
    deQueue,
    Front,
    Rear,
    isEmpty,
    isFull,
  };
}
