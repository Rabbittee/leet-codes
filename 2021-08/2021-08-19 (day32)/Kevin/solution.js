/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // 梯形公式
    let sum = (nums.length + 1) * (nums.length) / 2
    for(let i =0; i<nums.length; i++){
        sum -= nums[i]
    }
    return sum
};