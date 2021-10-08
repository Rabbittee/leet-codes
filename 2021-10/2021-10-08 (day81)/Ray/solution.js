var balancedStringSplit = function(s) {
    
    let countStack = new Array(2).fill(0);
    let pairCount = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        countStack[s[i] === "L" ? 0 : 1]++;
        if (countStack[0] === countStack[1]) {
            pairCount++;
            countStack = new Array(2).fill(0);
        }
    }
    return pairCount;
};