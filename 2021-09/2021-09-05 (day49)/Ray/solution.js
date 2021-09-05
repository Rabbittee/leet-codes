/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const refactorPointArray = (arr) => {
    let tempArray = [];
    let count = 0;
    let refactorArr = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        let found = tempArray.findIndex((item) => item === arr[i]);
        if (found > -1) {
            refactorArr.push(found);
        } else {
            refactorArr.push(count);
            tempArray.push(arr[i]);
            count++;
        }
    }
    
    return refactorArr;   
}

var wordPattern = function(pattern, s) {
    
    // record the pattern point (if apper new one the point record + 1)
    // record the s array point, and do it by split it first.
 
    const refactorPattern = refactorPointArray(pattern);
    const refactorS = refactorPointArray(s.split(" "));
    
    return refactorPattern.join("") === refactorS.join("");
    
};