/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  if (nums.indexOf(0)===-1)
    return 0
  
  let max = Math.max(...nums)
  let sum = max*(max+1)/2
  
  let num_sum = nums.reduce((a,b) => a+b)
  
  return sum - num_sum || nums.length
};