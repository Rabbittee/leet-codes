/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  if(nums.length==2) {
      return [0, 1];
  }
  const len = nums.length;
  let map = {};
  for (i=0; i< len; i++) {
      let a = target - nums [i]
      let b = map[a];
      console.log(b)
      if(b!==undefined) {
          return [b, i];
      }else {
          map[nums[i]] = i
      }
  }
};