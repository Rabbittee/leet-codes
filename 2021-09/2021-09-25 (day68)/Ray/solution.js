/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const calcFactorial = (num) => {
    let factorial = 1;
    for (let i = 1 ; i <= num ; i++) {
        factorial = factorial*i;
    }
    return factorial;
}

var uniquePaths = function(m, n) {
    m=m-1;
    n=n-1;
    
    return calcFactorial(m + n) / (calcFactorial(m)*calcFactorial(n))
};

// Runtime: 68 ms, faster than 91.67% of JavaScript online submissions for Unique Paths.
// Memory Usage: 38.5 MB, less than 89.86% of JavaScript online submissions for Unique Paths.