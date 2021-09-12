/**
 * initialize your data structure here.
 */
function MinStack() {
  let len = 0;
  let min = Infinity;
  const array = [];

  /**
   * @param {number} val
   * @return {void}
   */
  function push(val) {
    array[len] = val;

    len += 1;

    min = Math.min(min, val);
  }

  /**
   * @return {void}
   */
  function pop() {
    len -= 1;

    min = Math.min(...array.slice(0, len));
  }

  /**
   * @return {number}
   */
  function top() {
    return array[len - 1];
  }

  /**
   * @return {number}
   */
  function getMin() {
    return min;
  }

  return { push, pop, top, getMin };
}
