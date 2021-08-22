/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let searchIndex = nums.indexOf(target)
    if (searchIndex > -1) {
        return searchIndex
    } else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }
};