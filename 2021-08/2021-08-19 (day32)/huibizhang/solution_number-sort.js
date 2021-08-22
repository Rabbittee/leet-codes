/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const renums = nums.sort((a, b) => a - b)
  let missing = renums[renums.length-1] + 1
  
  for (let [key,index] of renums.entries()) {
    if (key!=index) {
      missing = key
      break
    }
  }
  
  return missing
};