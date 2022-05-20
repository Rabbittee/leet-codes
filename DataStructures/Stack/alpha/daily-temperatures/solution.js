/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length === 0) {
      stack.push([i, temperatures[i]]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1][1] < temperatures[i]) {
        ans[stack[stack.length - 1][0]] = i - stack[stack.length - 1][0];
        stack.pop();
      }

      stack.push([i, temperatures[i]]);
    }
  }
  return ans;
};
