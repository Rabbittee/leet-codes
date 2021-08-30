/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [
        [1]
    ]

    for (let i = 1; i < numRows; i++) {
        let preRow = result[i - 1]
        let curRow = [1]

        for (let j = 1; j <= i; j++) {
            let pre = preRow[j - 1]
            let cur = preRow[j] ? preRow[j] : 0
            curRow.push(pre + cur)
        }
        result.push(curRow)
    }
    return result
};