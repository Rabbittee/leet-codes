/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let accumulation = 0;
    let numsLength = nums.length;
    let maxSum = nums[numsLength -1];
    
    for (let i = numsLength -1 ; i > -1 ; i--) {
        
        accumulation = accumulation + nums[i];
        
        if (accumulation < nums[i]) accumulation = nums[i];
        
        maxSum = maxSum < accumulation ? accumulation : maxSum;
    }
    
    return maxSum;
};

