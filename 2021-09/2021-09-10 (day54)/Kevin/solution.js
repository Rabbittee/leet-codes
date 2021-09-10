/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    const stack = {}
    this.stack = stack
    this.lastIndex = () => Object.keys(stack).length - 1
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack[this.lastIndex() + 1] = val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    delete this.stack[this.lastIndex()]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.lastIndex()]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...Object.values(this.stack))
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */