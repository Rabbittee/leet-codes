var convertToTitle = function(columnNumber) {
    
    let answerStr = "";
    
    while (columnNumber!==0) {
        
        let pushNumber = (columnNumber % 26) || 26;
        
        answerStr = String.fromCharCode(pushNumber + 64) + answerStr;
        
        if (pushNumber === 26) {
            columnNumber = columnNumber - 26;   
        }
        
        columnNumber = Math.trunc((columnNumber) / 26);
        
    }
    
    return answerStr;
};