/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let [start, end] = [0, nums.length - 1];
  while ( start <= end) {
      let mid = Math.floor((start+end)/2);
      if (target === nums[mid]) {
          return mid;
      } else if(target > nums[end]) {
          return end+1;
      } else if(target < nums[start]) {
          return start;
      }
      
      if(target > nums[mid]) {
          if (target < nums[mid+1]) {
              return mid+1;
          }else {
              start = mid+1;
          }
      } else {
          if (target > nums[mid-1]) {
              return mid;
          }else {
              end = mid-1;
          }
      }
  }
};