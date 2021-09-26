/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle, DP = triangle.shift()) {
  if (!triangle.length) return Math.min(...DP);

  DP = triangle.shift().map(
    (num, x) =>
      num +
      Math.min(
        DP[x - 1] ?? Infinity,
        DP[x] ?? Infinity
        //
      )
  );

  return minimumTotal(triangle, DP);
}
