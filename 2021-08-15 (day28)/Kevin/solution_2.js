var removeDuplicates = function (nums) {
    // Skip the first value in nums, so set `i` and `j` with `1` instead of `0`
    let i = 1;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
