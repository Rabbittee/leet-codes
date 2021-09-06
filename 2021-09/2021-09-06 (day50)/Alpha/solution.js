/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let maxNum = 0;
  let maxEl = 0;
  let obj = {};
  nums.forEach((item) => {
      obj[item] ? obj[item]+=1 : obj[item] = 1;
  })
  
  for (let num in obj) {
      if ( obj[num] > maxNum ) {
          maxNum = obj[num];
          maxEl = num;
      } 
  }
  return maxEl;
};