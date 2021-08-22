const sum = (nums) => nums.reduce((a, b) => a + b, 0);

function singleNumber(nums) {
  const set = Array.from(new Set(nums));

  return 2 * sum(set) - sum(nums);
}
