/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const normal = {};
  const reverse = {};

  for (let index = 0; index < s.length; index++) {
    const A = s[index];
    const B = t[index];

    const _B = normal[A];
    const _A = reverse[B];

    if ((_A || _B) && (A !== _A || B !== _B)) {
      return false;
    }

    normal[A] = B;
    reverse[B] = A;
  }

  return true;
}
