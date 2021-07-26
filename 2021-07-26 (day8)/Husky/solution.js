/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const conversion_table = {
        'I': 1, 'V': 5,
        'X': 10, 'L': 50,
        'C': 100, 'D': 500,
        'M': 1000
    }
    return s
        .split('')
        .map((char) => conversion_table[char])
        .reduce((sum, curr, i, array) => {
            return sum + (curr < (array[i + 1] || 0) ? -curr : curr)
        }, 0)
};