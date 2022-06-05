/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashTable = new Set();

  for (let i of nums) {
    if (hashTable.has(i)) {
      return true;
    } else {
      hashTable.add(i);
    }
  }
};
