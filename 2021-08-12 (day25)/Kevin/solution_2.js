/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = strs.reduce((final, current) => {
        const sortedCurrent = current.split("").sort().join("");
        if (Object.keys(final).length === 0) {
            final[sortedCurrent] = [current];
            return final;
        }
        !final[sortedCurrent]
            ? (final[sortedCurrent] = [current])
            : (final[sortedCurrent] = [...final[sortedCurrent], current]);

        return final;
    }, {});
    return Object.values(result);
};
