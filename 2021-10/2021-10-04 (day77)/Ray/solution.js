var getHappyString = function(n, k) {
    
    let choiceChar = ["a", "b", "c"];
    let answerStack = [];
    
    const recursive = (deep, accString, lastIndex) => {
        if (deep === n) {
            answerStack.push(accString);
            return;
        }
        for (let i = 0 ; i < 3 ; i++) {
            if (lastIndex === i) continue;
            let record = accString + choiceChar[i];
            recursive(deep + 1, record, i)
        }
    };
    
    recursive(0, "");
    
    return answerStack[k-1] || "";
};