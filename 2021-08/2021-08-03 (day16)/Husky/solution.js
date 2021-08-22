/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    const half = Math.floor(matrix.length / 2)
    const end = matrix.length - 1
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < half; x++) {
            const temp = matrix[y][x]
            matrix[y][x] = matrix[y][end - x]
            matrix[y][end - x] = temp
        }
    }
};