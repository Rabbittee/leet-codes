/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1]
    let result = [
        [1]
    ]
    for (let i = 1; i <= rowIndex; i++) {
        let preRow = result[i - 1]
        let curRow = [1]
        for (let j = 1; j <= i; j++) {
            let pre = preRow[j - 1]
            let cur = preRow[j] ? preRow[j] : 0
            curRow.push(pre + cur)
        }
        if (i === rowIndex) return curRow
        result.push(curRow)
    }

};