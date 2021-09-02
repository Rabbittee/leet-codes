/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const refactorS = s.split("").sort().join();
    const refacotrT = t.split("").sort().join();
    if (refactorS === refacotrT) {
        return true;
    }
    return false;
};