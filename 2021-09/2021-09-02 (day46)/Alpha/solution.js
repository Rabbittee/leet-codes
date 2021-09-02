/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  const sArray = s.split('');
  const tArray = t.split('');
  const sArraySort = sArray.sort().toString();
  const tArraySort = tArray.sort().toString();
  if (sArraySort === tArraySort) {
      return true;
  } else {
      return false;
  }
};