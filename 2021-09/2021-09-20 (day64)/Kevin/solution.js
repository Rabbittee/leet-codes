/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const result = [];
    let [start, end] = [0, k - 1];
    while (end < nums.length) {
        result.push(helper(nums, start++, end++));
    }
    return result;
};

function helper(ary, start, end) {
    let max = -Infinity;
    while (start <= end) {
        max = Math.max(ary[start], max);
        start++;
    }
    return max;
}
