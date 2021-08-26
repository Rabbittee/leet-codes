/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1) return 1;
    const qualify = new Array(n + 1).fill(0);
    trust.forEach(each => {
        const [trustSb, beTrusted] = each;
        qualify[trustSb] = -Infinity;
        qualify[beTrusted] += 1;
    });
    return qualify.indexOf(n - 1);
};
