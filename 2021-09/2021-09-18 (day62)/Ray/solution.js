var RecentCounter = function() {
    this.stack = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while(this.stack[0] < t-3000) {
        this.stack.shift();
    }
    this.stack.push(t);
    return this.stack.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */