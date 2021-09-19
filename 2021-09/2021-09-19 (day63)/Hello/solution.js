/**
 * @param {number} k
 */
function MyCircularQueue(k) {
  const store = Array(k);
  let front = -1;
  let rear = -1;

  function enQueue(value) {
    if (isFull()) return false;

    if (front === -1) {
      front = 0;
    }

    rear = (rear + 1) % k;
    store[rear] = value;

    return true;
  }

  function deQueue() {
    if (isEmpty()) return false;

    if (front === rear) {
      front = -1;
      rear = -1;
    } else {
      front = (front + 1) % k;
    }

    return true;
  }

  function Front() {
    return isEmpty() ? -1 : store[front];
  }

  function Rear() {
    return isEmpty() ? -1 : store[rear];
  }

  function isEmpty() {
    return front === -1;
  }

  function isFull() {
    return (front === 0 && rear === k - 1) || front === rear + 1;
  }

  return { enQueue, deQueue, Front, Rear, isEmpty, isFull };
}
