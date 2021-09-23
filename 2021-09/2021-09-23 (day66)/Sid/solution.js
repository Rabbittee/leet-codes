/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s.length > t.length) return false
  if (!s) return true

  if (t.charAt(0) === s.charAt(0)) s = s.substring(1)
  return isSubsequence(s, t.substring(1))
}
