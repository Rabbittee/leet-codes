/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  const nagtive_keys = {},
        positive_keys = {}
  
  nums.forEach((num) =>{
    (num >= 0?positive_keys:nagtive_keys)[num.toString()]=num
  })

  const keys = Object.keys(nagtive_keys).concat(Object.keys(positive_keys))
  keys.forEach((key,index) => nums[index]=key)

  return keys.length
};