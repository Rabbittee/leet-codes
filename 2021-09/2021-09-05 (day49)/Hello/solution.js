/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const tokens = s.split(" ");

  if (pattern.length !== tokens.length) return false;

  const normal = {};
  const reverse = {};

  for (let index = 0; index < pattern.length; index++) {
    const key = pattern[index];
    const token = tokens[index];

    if (!normal[key] && !reverse[token]) {
      normal[key] = token;
      reverse[token] = key;

      continue;
    }

    if (normal[key] !== token || reverse[token] !== key) return false;
  }

  return true;
}
