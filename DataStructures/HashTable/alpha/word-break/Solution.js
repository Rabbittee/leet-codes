/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const map = new Map();

  for (let i = 0; i < wordDict.length; i++) {
    map.set(wordDict[i], true);
  }

  return check(s, map);
};

function check(string, map) {
  if (string === "") return true;

  if (map.get(string) === false) return false;

  for (let i = 0; i <= string.length; i++) {
    const word = string.substring(0, i);

    if (map.get(word)) {
      const removeWord = check(string.substring(i, string.length), map);

      if (removeWord) return true;
    }
  }

  map.set(string, false);
  return false;
}
