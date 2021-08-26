/**
 * @param {sing} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let cursor = 0; cursor < s.length; cursor++) {
    const isOpen = /\(+|\[+|\{+/.test(s[cursor]);

    if (isOpen) {
      stack.push(s[cursor]);

      continue;
    }

    const isClose = /\)+|\]+|\}+/.test(s[cursor]);

    if (isClose && map[stack.pop()] === s[cursor]) {
      continue;
    }

    return false;
  }

  return stack.length === 0;
}
