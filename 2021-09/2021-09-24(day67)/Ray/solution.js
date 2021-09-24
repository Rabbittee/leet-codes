/**
 * @param {number} n
 * @return {number}
 */

const recursive = (n) => {
    if (n <= 1) {
        return n;
    }
    
    let halfElement = Math.trunc(n/2);
    
    if (n % 2 === 0) {
        return recursive(halfElement);
    }
    
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

// Runtime: 64 ms, faster than 99.10% of JavaScript online submissions for Get Maximum in Generated Array.
// Memory Usage: 38.6 MB, less than 78.92% of JavaScript online submissions for Get Maximum in Generated Array.
