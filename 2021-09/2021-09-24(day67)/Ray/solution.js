/**
 * @param {number} n
 * @return {number}
 */

const recursive = (n) => {
    if (n <= 1) {
        return n;
    }
    if (n % 2 === 0) {
        return recursive(n/2);
    }
    
    let halfElement = Math.trunc(n/2);
    return recursive(halfElement) + recursive(halfElement + 1)
};
var getMaximumGenerated = function(n) {
    let maxNum = 0;
    for (let i = 0 ; i <= n ; i++) {
        let compareElement = recursive(i);
        if (compareElement > maxNum) {
            maxNum = compareElement;
        }
    }
    return maxNum;
};

// Runtime: 72 ms, faster than 80.27% of JavaScript online submissions for Get Maximum in Generated Array.
// Memory Usage: 38.7 MB, less than 78.92% of JavaScript online submissions for Get Maximum in Generated Array.