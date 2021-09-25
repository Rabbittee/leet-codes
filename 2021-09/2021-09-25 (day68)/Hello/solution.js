function factorial(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const [a, b] = [m - 1, n - 1];

  if (a === 0 || b === 0) return 1;

  return factorial(a + b) / (factorial(a) * factorial(b));
}
