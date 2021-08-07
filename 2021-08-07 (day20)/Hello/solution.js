/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const cache = {};

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    cache[char] = char in cache ? undefined : index;
  }

  const indeies = Object.values(cache).filter((value) => value !== undefined);

  return indeies.length ? Math.min(...indeies) : -1;
}

console.log(firstUniqChar("aabb"));
