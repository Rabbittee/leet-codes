/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  let index = 0;

  for (const char of t) {
    if (s[index] === char) index++;
  }

  return index === s.length;
}
