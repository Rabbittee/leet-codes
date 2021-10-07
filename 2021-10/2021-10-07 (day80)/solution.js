var longestPalindrome = function(s) {
    let elementCountObj = {};
    let elementCount = [];
    let longest = 0;
    let flag = 0;
    let subCountFlag = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        if (elementCountObj[s[i]]) {
            elementCountObj[s[i]]++;
            continue;
        }
        elementCountObj[s[i]] = 1;
    }
    elementCount = Object.values(elementCountObj);
    
    for (let i = 0 ; i < elementCount.length ; i++) {
        if (elementCount[i] === 1) {
            flag = 1;
            continue;
        }
        if (elementCount[i] % 2) {
            if (subCountFlag) {
                longest--;
            }
            subCountFlag = 1;
        } 
        longest = longest + elementCount[i];
    }
    
    if (longest % 2 === 0 && flag) {
        longest = longest + 1;
    }
    
    return longest;
};