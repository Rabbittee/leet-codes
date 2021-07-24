/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let [left, right] = [0, 0];

  let temp = "";
  let longest = 0;

  while (right < s.length) {
    while (left < right && temp.includes(s[right])) {
      left += 1;
      temp = s.slice(left, right);
    }

    temp += s[right];

    if (longest < temp.length) {
      longest = temp.length;
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
