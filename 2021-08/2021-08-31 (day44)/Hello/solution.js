/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex, current = 0, result = [1]) {
  if (rowIndex === current) return result;

  current += 1;

  for (let x = current; x > 0; x--) {
    result[x] = result[x - 1] + result[x] || 1;
  }

  return getRow(rowIndex, current, result);
}
