/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let temp = [];
    let index = 0;

    while (temp.indexOf(nums[index]) === -1) {
        temp.push(target - nums[index]);
        index++;
    }

    return [temp.indexOf(nums[index]), index];
};
