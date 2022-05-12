/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const s1Ary = s1.split("");
    const s2Ary = s2.split("");
    const s3Ary = s3.split("");

    if ((s1 + s2).length !== s3.length) return false;
    if (s3.length === 0) return true;

    return helper(s3Ary, s1Ary, s2Ary);
};

function helper(longAry, shortAryA, shortAryB, aPt = 0, bPt = 0) {
    if (longAry.length === 0) return true;
    if (longAry[0] === shortAryA[aPt] && helper(longAry.slice(1), shortAryA, shortAryB, aPt + 1, bPt)) return true;
    if (longAry[0] === shortAryB[bPt] && helper(longAry.slice(1), shortAryA, shortAryB, aPt, bPt + 1)) return true;
    return false;
}
