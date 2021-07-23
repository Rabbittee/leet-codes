1.  Find the middle of the nums array.
2.  if target is smaller than nums[0], insert position should be 0
    if target is greater than nums[nums.length-1], insert position should be nums.length
3.  Loop when middle of nums is not target, check if target > nums[mid], set new left to mid + 1 and only look for target in the half.
4.  If target is not found, if insert the target in nums, then the target index should be left
