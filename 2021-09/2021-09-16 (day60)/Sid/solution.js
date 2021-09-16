/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle, index = 0) => {
  if (!needle) return 0

  if (index >= haystack.length || !haystack || needle.length > haystack.length) return -1

  if (haystack.slice(index, index + needle.length) === needle) return index

  return strStr(haystack, needle, index + 1)
}
