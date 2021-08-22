function NestedInteger() {
  this.isInteger = function () {};

  this.getInteger = function () {};

  this.getList = function () {};
}

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
function NestedIterator(nestedList) {
  function* generator(list) {
    for (const node of list) {
      if (node.isInteger()) {
        yield node.getInteger();
      } else {
        yield* generator(node.getList());
      }
    }
  }

  this.generator = generator(nestedList);
  this._next = this.generator.next();
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return !this._next.done;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  const value = this._next.value;

  this._next = this.generator.next();

  return value;
};
