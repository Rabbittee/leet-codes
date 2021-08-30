function generate(numRows: number): number[][] {
  let result: number[][] = new Array();
  for (let i = 0; i < numRows; i += 1) {
    result[i] = new Array();
    result[i][0] = 1;
    result[i][i] = 1;

    let row: number[] = new Array();
    for (let j = 1; j < i; j += 1) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
};