/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // use bit wise to solve the problem
    let bitCount = 0;
    let answer = [];
    for (let i = 0 ; i <= n ; i++) {
        bitCount = 0;
        for (let j = 0 ; j < 32 ; j++) {
            if (i & (1 << j)) {
                bitCount++;
            }
        }
        answer.push(bitCount);
    }
    return answer;
};