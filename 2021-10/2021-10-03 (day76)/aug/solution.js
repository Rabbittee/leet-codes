/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.result = compose(characters);
  this.step = 0;

  function compose(substr, current = '', output = []) {
    if (current.length === combinationLength) {
      output.push(current);
      return;
    }

    for (let i = 0; i < substr.length; i++) {
      compose(substr.substring(i + 1), current + substr[i], output);
    }

    return output;
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.result[this.step++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.step < this.result.length;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/**
 * https://leetcode.com/problems/iterator-for-combination/
 * 1286. Iterator for Combination
 *
 * Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Iterator for Combination.
 * Memory Usage: 44.2 MB, less than 82.61% of JavaScript online submissions for Iterator for Combination.
 */
