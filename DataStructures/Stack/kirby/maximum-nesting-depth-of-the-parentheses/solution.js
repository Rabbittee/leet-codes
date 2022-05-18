/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let stack = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === "(") {
      stack += 1;
      maxDepth = Math.max(maxDepth, stack);
    }
    //
    else if (char === ")") {
      stack -= 1;
    }
  }

  return maxDepth;
}
