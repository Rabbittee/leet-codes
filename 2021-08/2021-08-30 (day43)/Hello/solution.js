/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(
  numRows,
  result = [],
  lastrow = result[result.length - 1] || []
) {
  if (result.length === numRows) return result;

  return generate(numRows, [
    ...result,
    Array.from(
      { length: lastrow.length + 1 },
      (_, x) => lastrow[x - 1] + lastrow[x] || 1
    ),
  ]);
}
