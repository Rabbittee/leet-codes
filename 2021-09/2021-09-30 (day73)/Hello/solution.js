/**
 * @param {string} s
 * @return {string[]}
 */
function letterCasePermutation(s, index = 0, word = "", results = []) {
  if (index === s.length) {
    results.push(word);

    return [];
  }

  if (isNaN(s[index])) {
    letterCasePermutation(s, index + 1, word + s[index].toUpperCase(), results);
    letterCasePermutation(s, index + 1, word + s[index].toLowerCase(), results);
  } else {
    letterCasePermutation(s, index + 1, word + s[index], results);
  }

  return results;
}
