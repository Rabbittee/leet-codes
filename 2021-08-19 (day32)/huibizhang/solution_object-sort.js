/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = {}

  nums.forEach((num) => {
    map[num] = num;
  })

  let missing = Math.max(...nums) + 1

  for (let [key,index] of Object.keys(map).entries()) {
    if (key!=index) {
      missing = key
      break
    }
  }

  return missing
};