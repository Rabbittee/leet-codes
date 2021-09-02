/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return sort(s) === sort(t);
};

function sort(str) {
    return str.split("").sort().join("");
}
