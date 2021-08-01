/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const _grid = grid;
    grid.forEach((y, yi) => {
        y.forEach((x, xi) => {
            // * 沒有上面可以加就只加左邊
            if (xi > 0 && yi === 0) {
                // * 複製陣列的這個位置存 - 自己 + 左邊
                _grid[yi][xi] = _grid[yi][xi - 1] + x;
            }
            // * 沒有左邊可以加就只加左邊
            if (xi === 0 && yi > 0) {
                // * 複製陣列的這個位置存 - 自己 + 上面
                _grid[yi][xi] = _grid[yi - 1][xi] + x;
            }
            // * 上面左邊都有就要比較哪個比較小
            if (xi > 0 && yi > 0) {
                // * 複製陣列的這個位置存 - 上面跟左邊的相對小值 + 自己
                _grid[yi][xi] =
                    Math.min(_grid[yi - 1][xi], _grid[yi][xi - 1]) + x;
            }
        });
    });
    const lastArray = _grid[_grid.length - 1];
    // 取得最後陣列的最後一個值
    return lastArray[lastArray.length - 1];
};
