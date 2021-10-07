function getHappyString(n: number, k: number): string {
  const happyStrings = genHappyString(n, k, '');
  if (k > happyStrings.length) return '';
  else return happyStrings[k - 1];
};
function genHappyString(n: number, k: number, prev: string): string[] {
  console.log(prev);

  if (prev.length === n) return [prev];

  const chars = ['a', 'b', 'c'];
  let result: string[] = new Array();
  for (const char of chars) {

    if (prev[prev.length - 1] != char) {

      result = result.concat(genHappyString(n, k, prev + char));
      if (result.length === k) return result;
    }
  }
  return result;
}