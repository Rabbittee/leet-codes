/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.inputString = characters;
    this.conbimeLength = combinationLength;
    
    this.allPossible = this.calAllPossible();
    this.allPossibleLength = this.allPossible.length;
    
    this.callNextCount = 0;
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    let returnValue = this.allPossible[this.callNextCount];
    this.callNextCount++;
    return returnValue;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if (this.callNextCount < this.allPossibleLength) {
        return true;
    }
    return false;
};

CombinationIterator.prototype.calAllPossible = function() {
    
    let allStack = [];
    
    const recursive = (deep, accString, index) => {
        if (deep === this.conbimeLength) {
            allStack.push(accString);
            return;
        }
        for (let i = index ; i < this.inputString.length ; i++) {
            let record = accString + this.inputString[i];
            recursive(deep+1, record, i+1);
        }
    }
     
    recursive(0, "", 0);
    
    return allStack;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */