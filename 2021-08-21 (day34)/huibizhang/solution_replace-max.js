/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  for(let i=0;i<k-1;i++){
    const max = Math.max(...nums)
    nums[nums.indexOf(max)]=-999
  }
  return Math.max(...nums)
};