function NestedInteger() {
  this.isInteger = function () {};

  this.getInteger = function () {};

  this.getList = function () {};
}

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
function NestedIterator(queue) {
  function flatten() {
    const node = queue.shift();

    if (!node) {
      return;
    }

    if (node.isInteger()) {
      queue.unshift(node);

      return;
    }

    queue.unshift(...node.getList());

    return flatten();
  }

  function next() {
    return queue.shift().getInteger();
  }

  function hasNext() {
    if (queue[0]?.isInteger()) {
      return true;
    }

    flatten();

    return queue.length;
  }

  return {
    queue,
    hasNext,
    next,
  };
}
