import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let [l, r] = [0, 0];
  let step = 0;

  while (r < nums.length - 1) {
    let max = l;
    for (let index = l; index <= r; index++) {
      max = Math.max(max, index + nums[index]);
    }

    [l, r] = [r + 1, max];

    step++;
  }

  return step;
}

// === test ===
Deno.test("Test jump", () => {
  [
    { test: [0], expected: 0 },
    { test: [2, 1], expected: 1 },
    { test: [3, 2, 1], expected: 1 },
    { test: [1, 2, 3], expected: 2 },
    { test: [2, 3, 1, 1, 4], expected: 2 },
    { test: [2, 3, 0, 1, 4], expected: 2 },
    { test: [2, 0, 2, 0, 1], expected: 2 },
    { test: [3, 4, 3, 2, 5, 4, 3], expected: 3 },
    //
  ].forEach(({ test, expected }) => {
    const actual = jump(test);

    assertEquals(
      actual,
      expected,
      `jump(${test}) return ${actual} but expect: ${expected}`
    );
  });
});
