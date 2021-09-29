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
    return;
  }

  const rest = nums.filter((n) => !ans.includes(n));

  rest.forEach((n) => {
    getPermutations(nums, [...ans, n], res);
  });

  return res;
}
