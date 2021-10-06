/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  while (i < flowerbed.length && n !== 0) {
    flowerbed[i] ? (i += 2) : flowerbed[i - 1] || flowerbed[i + 1] ? i++ : (n--, (i += 2));
  }
  return !n;
};

/**
 * https://leetcode.com/problems/can-place-flowers/
 * 605. Can Place Flowers
 *
 * Runtime: 76 ms, faster than 87.02% of JavaScript online submissions for Can Place Flowers.
 * Memory Usage: 41.1 MB, less than 25.76% of JavaScript online submissions for Can Place Flowers.
 */
