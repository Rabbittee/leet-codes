/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle, index = 0) {
  if (!needle.length) return 0;

  if (index >= haystack.length) return -1;

  if (
    haystack[index] === needle[0] &&
    haystack.slice(index, index + needle.length) === needle
  ) {
    return index;
  }

  return strStr(haystack, needle, index + 1);
}
