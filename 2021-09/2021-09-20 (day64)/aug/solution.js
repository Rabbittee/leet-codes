/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums;

  const queue = [];
  const res = [];

  nums.forEach((num, i) => {
    // decreasing monotonic queue
    while (num >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);

    // outside the window
    if (queue[0] === i - k) {
      queue.shift();
    }

    // if window is fully inside the array
    if (i + 1 >= k) {
      res.push(nums[queue[0]]);
    }
  });

  return res;
};

/**
 * The best record
 * Runtime: 356 ms, faster than 86.28% of JavaScript online submissions for Sliding Window Maximum.
 * Memory Usage: 75.2 MB, less than 73.93% of JavaScript online submissions for Sliding Window Maximum.
 */
