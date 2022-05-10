function Node(value, prev, next) {
  const node = {
    value,
    prev,
    next,
  };

  if (prev) prev.next = node;

  return node;
}

/**
 * @param {string} homepage
 */
function BrowserHistory(homepage) {
  let current = Node(homepage);

  /**
   * @param {string} url
   * @return {void}
   */
  function visit(url) {
    current = Node(url, current);
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  function back(steps) {
    if (steps <= 0 || !current.prev) return current.value;

    current = current.prev;
    return back(steps - 1);
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  function forward(steps) {
    if (steps <= 0 || !current.next) return current.value;

    current = current.next;
    return forward(steps - 1);
  }

  return { visit, back, forward };
}
