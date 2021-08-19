/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let missing = nums.length
  
  for(index=0;index<nums.length;index++) {
    if (nums.indexOf(index)===-1) {
      missing = index
      break
    }
  }
  
  return missing
};