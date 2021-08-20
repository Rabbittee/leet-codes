function findDuplicate(nums) {
  //
  nums.sort((a, b) => a - b);

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index + 1]) {
      return nums[index];
    }
  }

  return -1;
}
