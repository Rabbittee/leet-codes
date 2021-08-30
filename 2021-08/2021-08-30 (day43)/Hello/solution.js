function range(n) {
  return Array.from({ length: n }, (_, index) => index);
}

function append(arr, item) {
  return [...arr, item];
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  return range(numRows).reduce((result, y) => {
    return append(
      result,
      !result[y - 1]
        ? [1]
        : range(y + 1).map((x) => result[y - 1][x - 1] + result[y - 1][x] || 1)
    );
  }, []);
}
