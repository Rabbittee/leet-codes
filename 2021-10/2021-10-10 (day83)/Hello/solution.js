/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  nums = nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");

  return nums[0] === "0" ? "0" : nums;
}
