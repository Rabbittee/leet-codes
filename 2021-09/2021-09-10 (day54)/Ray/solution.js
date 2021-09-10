// ES5 and ES6 have different constructor
// https://yakimhsu.com/project/project_w17_advancedJS_07_OOP.html

var MinStack = function() {
    this.answer = [];
};

MinStack.prototype.push = function(val) {
    this.answer.push(val);
};

MinStack.prototype.pop = function() {
    this.answer.pop();
};

MinStack.prototype.top = function() {
    return this.answer[this.answer.length-1];
};

MinStack.prototype.getMin = function() {
    let min = this.answer[0];
    for (let i = 1 ; i < this.answer.length ; i++) {
        if (this.answer[i] < min) {
            min = this.answer[i];
        }
    }
    
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */