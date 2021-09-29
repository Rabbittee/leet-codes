/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return getPermutations(nums);
};

function getPermutations(nums, ans = [], res = []) {
  if (ans.length === nums.length) {
    res.push(ans);
    return [];
  }

  const rest = nums.filter((n) => !ans.includes(n));

  rest.forEach((n) => {
    getPermutations(nums, [...ans, n], res);
  });

  return res;
}

/**
 * https://leetcode.com/problems/permutations/
 * 46. Permutations
 *
 * Runtime: 100 ms, faster than 39.92% of JavaScript online submissions for Permutations.
 * Memory Usage: 44.6 MB, less than 7.47% of JavaScript online submissions for Permutations.
 *
 */
