/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    return helper(n, [])
};

function helper(n, cache){
    if(cache[n]){
        return cache[n]
    }
    if(n === 1) cache[n] = 1
    else if(n === 2) cache[n] = 2
    else cache[n] = helper(n-2, cache) + helper(n-1, cache)
    return cache[n]
}