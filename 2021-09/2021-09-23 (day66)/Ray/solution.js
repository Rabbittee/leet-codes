/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // use queue to store the s string
    let queue = s.split("");
    let compareElement = queue.shift();
    
    for (let i = 0 ; i < t.length ; i++) {
        if (compareElement === t[i]) {
            compareElement = queue.shift();
        }
    }
    // if queue is empty and final compareElement is be compared
    // the compareElement will be undefined
    return !compareElement;
};