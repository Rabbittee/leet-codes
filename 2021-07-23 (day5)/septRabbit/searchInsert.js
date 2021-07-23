var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  if (target < nums[0]) return 0;
  if (target > nums[right]) return nums.length;

  while (nums[mid] !== target && left <= right) {
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (nums[mid] === target) {
    return mid;
  } else return left;
};
