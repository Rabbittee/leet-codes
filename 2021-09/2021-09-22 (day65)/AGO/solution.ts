function countBits(n: number): number[] {
  let result: number[] = [0];
  let exp: number = 0;
  let lower = Math.pow(2, exp);
  let upper = Math.pow(2, exp + 1);

  for (let i = 1; i <= n; i += 1) {
    if (i == upper) {
      exp += 1;
      lower = Math.pow(2, exp);
      upper = Math.pow(2, exp + 1)
    }
    result.push(result[i - lower] + 1);
  }
  return result;
};