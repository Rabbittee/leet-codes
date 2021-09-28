/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    let maxSum = 0
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0 ; i < nums.length ; i+=2) {
        maxSum = maxSum + nums[i];
    }
    
    return maxSum;
};