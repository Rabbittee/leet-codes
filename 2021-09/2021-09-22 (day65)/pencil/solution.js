/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {

  const ansArr = [];

  for (let i = 0; i <= n; i ++) {
    // n convert to binary format
    let binaryNum = i.toString(2);

    // count the number of 1's
    ansArr.push(binaryNum.split('1').length - 1);
  }

  return ansArr;
};

/**
 * https://leetcode.com/problems/counting-bits
 * 338. Counting Bits
 * Runtime: 152 ms, faster than 28.00% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 49.5 MB, less than 28.39% of JavaScript online submissions for Counting Bits.
 */