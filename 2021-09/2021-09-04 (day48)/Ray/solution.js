/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const transferFunc = (a) => {
    let count = 0;
    let tempArray = [];
    let transAnswer = [];
    
    for(let i = 0 ; i < a.length ; i++) {
        let found = tempArray.findIndex((element) => element === a[i]);
        if (found !== -1) {
            transAnswer.push(found);
        } else {
            tempArray.push(a[i]);
            transAnswer.push(count);
            count++;
        }
    }
    return transAnswer;
}

var isIsomorphic = function(s, t) {
    
    // By record every element in point.
    // if appear new one element, just add 1.
    // if match the old element, just push the same point before.
    // Finally, we just found that if the two array is the same.
    
    let transS = transferFunc(s).join();
    let transT = transferFunc(t).join();
    
    if (transS === transT) {
        return true;
    }
    return false;
};