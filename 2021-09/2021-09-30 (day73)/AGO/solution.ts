function letterCasePermutation(s: string): string[] {
  return backtracking(s, '');
};

function backtracking(chars: string, prev: string): string[] {
  let result: string[] = new Array();
  // skip number
  while (!isNaN(parseInt(chars[0])) && chars.length > 0) {
    prev += chars[0];
    chars = chars.slice(1);
  }

  // if it is end of string, return
  if (chars.length === 0)
    return [prev]
  
  // get letter backtrak with 
  result = result.concat(...backtracking(chars.slice(1), prev + chars[0].toUpperCase()));
  result = result.concat(...backtracking(chars.slice(1), prev + chars[0].toLowerCase()));
  return result;
}