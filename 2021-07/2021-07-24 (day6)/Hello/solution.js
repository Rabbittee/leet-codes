/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let [left, right] = [0, 0];
  let longest = 0;

  while (right < s.length) {
    while (left < right && s.slice(left, right).includes(s[right])) {
      left += 1;
    }

    const length = right - left + 1;
    if (longest < length) {
      longest = length;
    }

    right += 1;
  }

  return longest;
}

function main() {
  [
    //
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "",
    "b",
  ].forEach((test) => {
    console.log(lengthOfLongestSubstring(test));
  });
}
main();
