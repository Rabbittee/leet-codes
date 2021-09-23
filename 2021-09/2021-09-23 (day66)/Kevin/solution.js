/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s) return true;
    let i = -1;
    for (val of t) {
        if (val === s[i + 1]) i++;
        if (s.length === i + 1) return true;
    }
    return false;
};
