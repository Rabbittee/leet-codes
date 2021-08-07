/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  for (let index = 0; index < s.length; index++) {
    if (s.indexOf(s[index]) === s.lastIndexOf(s[index])) {
      return index;
    }
  }

  return -1;
}

console.log(firstUniqChar("aabb"));
