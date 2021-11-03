/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (ransomNote[i]) {
      const amount = map.get(ransomNote[i]) ?? 0;
      map.set(ransomNote[i], amount - 1);
    }

    const amount = map.get(magazine[i]) ?? 0;
    map.set(magazine[i], amount + 1);
  }

  for (const [_, value] of map) {
    if (value < 0) return false;
  }

  return true;
};

/**
 * https://leetcode.com/problems/ransom-note/
 * 383. Ransom Note
 *
 * Runtime: 88 ms, faster than 92.57% of JavaScript online submissions for Ransom Note.
 * Memory Usage: 43 MB, less than 24.07% of JavaScript online submissions for Ransom Note.
 */
