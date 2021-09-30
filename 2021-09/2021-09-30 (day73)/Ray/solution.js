/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    s = s.split("").map((item) => item.toLowerCase());
    // str.charCodeAt() to get ASCII code
    // A-Z is 65-90
    // a-z is 97-122
    const answerStack = [];
    
    const recursive = (deep, stack) => {
        if (deep === s.length) {
            answerStack.push(stack.join(""))
            return;
        } 
        
        let record = [...stack];
        
        if (record[deep].charCodeAt() <= 122 && record[deep].charCodeAt() >= 97) {
            recursive(deep + 1, record);
            record[deep] = record[deep].toUpperCase();
            recursive(deep + 1, record);
            return;
        }
        
        recursive(deep + 1, record);  
    }
    
    recursive(0, s);
    return answerStack;

};