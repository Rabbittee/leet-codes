function permute(nums, current = [], result = []) {
  if (nums.length === current.length) {
    result.push(current);

    return [];
  }

  const rest = nums.filter((num) => !current.includes(num));

  for (const num of rest) {
    permute(nums, [...current, num], result);
  }

  return result;
}
