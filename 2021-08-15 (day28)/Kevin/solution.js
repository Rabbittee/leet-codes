var removeDuplicates = function (nums) {
    // Skip the first value in nums, so set `i` with `1` instead of `0`
    let i = 1;
    while (i < nums.length) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};
