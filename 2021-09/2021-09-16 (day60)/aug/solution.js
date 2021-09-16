/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  const firstLength = haystack.split(needle)[0].length;

  if (firstLength === haystack.length) return -1;

  return firstLength;
};
