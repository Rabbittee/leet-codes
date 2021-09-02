/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const from = "a".charCodeAt();
  const table = Array(26).fill(0);

  for (let index = 0; index < s.length; index++) {
    const charA = s.charCodeAt(index) - from;
    const charB = t.charCodeAt(index) - from;

    table[charA] += 1;
    table[charB] -= 1;
  }

  for (const value of table) {
    if (value !== 0) return false;
  }

  return true;
}
