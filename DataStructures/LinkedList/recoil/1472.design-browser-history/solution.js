/**
 * @param {string} homepage
 */
 class Node{
    constructor(url){
        this.val = url;
        this.prev = null;
        this.next = null;
    }
}

var BrowserHistory = function(homepage) {
    this.currentPage = new Node(homepage); 
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const node = new Node(url)
    this.currentPage.next = node
    node.prev = this.currentPage;
    this.currentPage = node
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps && this.currentPage.prev){
        steps--
        this.currentPage = this.currentPage.prev
    }
    return this.currentPage.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps && this.currentPage.next){
        steps++
        this.currentPage = this.currentPage.next
    }
    return this.currentPage.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */