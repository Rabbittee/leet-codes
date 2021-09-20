function MonotonicQueue() {
  const store = [];

  return {
    head() {
      return store[0];
    },

    shift() {
      store.shift();
    },

    push(value) {
      while (value > store[store.length - 1]) {
        store.pop();
      }

      store.push(value);
    },
  };
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const result = [];
  const queue = MonotonicQueue();

  let count = 0;

  for (const num of nums) {
    queue.push(num);

    count += 1;
    if (count >= k) {
      result.push(queue.head());

      if (queue.head() === nums[count - k]) queue.shift();
    }
  }

  return result;
}
