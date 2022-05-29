function Node(value) {
  return {
    value,
    next: null,
  };
}

function MyQueue() {
  let size = 0;

  const init = Node(null);
  let front = init;
  let rear = init;

  /**
   * @param {number} x
   * @return {void}
   */
  function push(x) {
    rear.next = Node(x);
    rear = rear.next;
    size += 1;
  }

  /**
   * @return {number}
   */
  function pop() {
    const value = front.next.value;

    front.next = front.next.next;
    if (front.next == null) {
      rear = front;
    }

    size -= 1;

    return value;
  }

  /**
   * @return {number}
   */
  function peek() {
    return front.next.value;
  }

  /**
   * @return {boolean}
   */
  function empty() {
    return size === 0;
  }

  return {
    empty,
    peek,
    pop,
    push,
  };
}
