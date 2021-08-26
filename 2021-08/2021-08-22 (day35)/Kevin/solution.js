/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n === 1) return 1;

    let map = {
        trusts: new Map(),
        beTrusts: new Map(),
    };
    let result = -1;

    for (let i = 0; i < trust.length; i++) {
        const [person, beTrusted] = trust[i];
        let value = map.trusts.has(person) ? map.trusts.get(person) : [];
        map.trusts.set(person, value.concat(beTrusted));
        map.beTrusts.set(beTrusted, (map.beTrusts.get(beTrusted) || 0) + 1);
    }

    map.beTrusts.forEach((value, key) => {
        if (value === n - 1 && !map.trusts.has(key)) result = key;
    });
    return result;
};
