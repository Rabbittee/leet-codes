function missingNumber(nums: number[]): number {
  let result: number = 0; // store answer
  for (let i = 1; i <= nums.length; i++) {
    result += i;
    result -= nums[i - 1];
  }
  return result;
};