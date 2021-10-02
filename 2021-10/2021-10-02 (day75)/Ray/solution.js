
// Method 1 : without using Set

var numTilePossibilities = function(tiles) {
    
    let answerStack = [];
    let tilesLength = tiles.length;
    
    const findJudge = (newRecord) => {
        let tempTiles = tiles.split("");
        for (let i = 0 ; i < newRecord.length ; i++) {
            let findIndex = tempTiles.indexOf(newRecord[i]);
            if (findIndex === -1) {
                return -1;
            }
            tempTiles.splice(findIndex, 1);
        }
        return 1;
    }
    
    const recursive = (deep, record, index) => {
        
        if (deep === tilesLength) {
            return;
        }
        
        for(let i = 0 ; i < tilesLength ; i++) {
            
            if (i === index) continue;
            
            let newRecord = record + tiles[i];
            
            if (findJudge(newRecord) === -1) continue;
            
            if (answerStack.includes(newRecord)) continue;
            
            answerStack.push(newRecord);
            recursive(deep + 1, newRecord, i);
        }
    }
    recursive(0, "");
    return answerStack.length;
};


// Method 2 : use Set
var numTilePossibilities = function(tiles) {
    
    const answer = new Set();
    
    const recursive = (deep, accString, totalString) => {
        if (deep === tiles.length) {
            return;
        }
        for (let i = 0 ; i < totalString.length ; i++) {
            let record = accString;
            record = record + totalString[i];
            answer.add(record);
            let recordString = totalString.substring(0,i) + totalString.substring(i+1);
            recursive(deep+1, record, recordString);
        }
    }
    recursive(0, "", tiles);
    return answer.size;
};