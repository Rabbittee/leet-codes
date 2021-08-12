/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = strs.reduce((final, current) => {
        const sortedCurrent = current.split("").sort().join("");
        !final[sortedCurrent]
            ? (final[sortedCurrent] = [current])
            : final[sortedCurrent].push(current);

        return final;
    }, {});
    return Object.values(result);
};
