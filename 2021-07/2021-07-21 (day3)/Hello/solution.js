/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    ans = traverse(s, i, i, ans);
    ans = traverse(s, i, i + 1, ans);
  }

  return ans;
}

function traverse(s, start, end, ans) {
  if (start < 0 || end > s.length - 1 || s[start] !== s[end]) return ans;

  if (ans.length < end - start + 1) {
    ans = s.slice(start, end + 1);
  }

  return traverse(s, start - 1, end + 1, ans);
}
