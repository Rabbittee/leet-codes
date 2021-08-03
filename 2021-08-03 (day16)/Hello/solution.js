import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length;

  //   Transpose
  for (let y = 0; y < n; y++) {
    for (let x = y; x < n; x++) {
      const temp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = temp;
    }
  }

  //   Flip
  for (let y = 0; y < matrix.length; y++) {
    matrix[y].reverse();
  }
}

Deno.test("test rotate", () => {
  [
    {
      test: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expect: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
  ].forEach(({ test, expect }) => {
    rotate(test);

    test.forEach((row, index) => {
      assertEquals(row.join(), expect[index].join());
    });
  });
});
