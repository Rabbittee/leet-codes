/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const result = Array.from({ length: height }, () => Array(width));

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x === 0 && y === 0) {
        result[y][x] = grid[y][x];
        continue;
      }

      const up = result[y]?.[x - 1] ?? Infinity;
      const left = result[y - 1]?.[x] ?? Infinity;

      result[y][x] = Math.min(up, left) + grid[y][x];
    }
  }

  return result[height - 1][width - 1];
}

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(grid));
