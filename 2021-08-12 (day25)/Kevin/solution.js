/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    return strs
        .reduce((final, current) => {
            const sortedCurrent = current.split("").sort().join("");

            if (final.length === 0) {
                return [
                    {
                        sorted: sortedCurrent,
                        list: [current],
                    },
                ];
            }

            for (let i = 0; i < final.length; i++) {
                if (final[i].sorted == sortedCurrent) {
                    final[i].list.push(current);
                    return final;
                }
            }

            return [
                ...final,
                {
                    sorted: sortedCurrent,
                    list: [current],
                },
            ];
        }, [])
        .map(item => item.list);
};
