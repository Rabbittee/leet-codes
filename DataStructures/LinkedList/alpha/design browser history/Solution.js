class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  //without head in js
  let node = new Node(homepage, null, null);
  this.current = node;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let node = new Node(url, null, null);
  this.current.next = node;
  node.prev = this.current;
  this.current = node;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let i = 0;
  while (i < steps && this.current.prev) {
    this.current = this.current.prev;
    i++;
  }
  return this.current.value;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let i = 0;
  while (i < steps && this.current.next) {
    this.current = this.current.next;
    i++;
  }
  return this.current.value;
};
