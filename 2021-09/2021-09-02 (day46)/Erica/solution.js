/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const compareString = [...s].filter((item) => [...t].indexOf(item) > -1)
    return compareString.length === s.length ? true : false
};