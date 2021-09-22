/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [0]
    for(let i=1; i<n+1; i++){
        let str = i.toString(2)
        arr.push(str.split('1').length-1)
    }
    return arr
};