var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // append new request
  this.queue.push(t);

  // remove the expired requests
  while (this.queue[0] + 3000 < t) {
    this.queue.shift();
  }

  // the number of requests
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
