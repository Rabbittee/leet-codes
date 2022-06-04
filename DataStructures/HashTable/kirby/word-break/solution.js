/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const dp = Array(s.length + 1);

  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = wordDict.some(
      (word) => s.startsWith(word, i) && dp[i + word.length]
    );
  }

  return dp[0];
}
