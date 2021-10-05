/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  const sub = (a, b) => a - b;
  g = g.sort(sub);
  s = s.sort(sub);

  let i = 0;
  let j = 0;

  while (j < s.length && i < g.length) {
    if (s[j] >= g[i]) {
      j += 1;
      i += 1;
    }

    if (s[j] < g[i]) {
      j += 1;
    }
  }

  return i;
}
