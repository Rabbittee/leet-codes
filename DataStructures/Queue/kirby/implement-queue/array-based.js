function MyQueue() {
  const array = [];
  const size = 100;
  let front = 1;
  let rear = 0;

  /**
   * @param {number} x
   * @return {void}
   */
  function push(x) {
    rear = (rear + 1) % size;
    array[rear] = x;
  }

  /**
   * @return {number}
   */
  function pop() {
    const value = array[front];
    front = (front + 1) % size;
    return value;
  }

  /**
   * @return {number}
   */
  function peek() {
    return array[front];
  }

  /**
   * @return {boolean}
   */
  function empty() {
    return front - rear === 1;
  }

  return {
    empty,
    peek,
    pop,
    push,
  };
}
