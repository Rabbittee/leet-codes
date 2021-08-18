/**
 * @param {number} n
 * @return {boolean}
 */

// Solution 1 - recursive
var isPowerOfThree = function(n) {
    if(n < 1 ) return false
    if(n === 1) return true 
    return isPowerOfThree( n/3 )
};

// Solution 2 - loop
var isPowerOfThree = function(n) {
    if( n === 0 ) return false
    while( n%3 === 0 ){
        n /= 3
    }
    return n === 1
};