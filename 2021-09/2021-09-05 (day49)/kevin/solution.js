/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sAry = s.split(" ");
    if (pattern.length !== sAry.length) return false;
    const map = new Map();
    const mapPattern = new Map();
    let index = 0;
    while (index < sAry.length) {
        if (!map.has(sAry[index])) {
            map.set(sAry[index], index);
        }

        if (!mapPattern.has(pattern[index])) {
            mapPattern.set(pattern[index], index);
        }

        if (mapPattern.get(pattern[index]) !== map.get(sAry[index])) return false;

        index++;
    }
    return true;
};
