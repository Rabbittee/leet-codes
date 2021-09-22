/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const DP = Array(n + 1).fill(0);
  let offset = 1;

  for (let index = 1; index <= n; index++) {
    if (offset * 2 === index) {
      offset = index;
    }

    DP[index] = 1 + DP[index - offset];
  }

  return DP;
}
