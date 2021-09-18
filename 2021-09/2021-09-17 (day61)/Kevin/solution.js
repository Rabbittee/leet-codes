var RecentCounter = function () {
    this.pingsTime = [];
    this.l = 0;
    this.recentCount = () => this.pingsTime.length - this.l;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.pingsTime.push(t);
    for (let i = this.l; i < this.pingsTime.length; i++) {
        if (this.pingsTime[i] >= t - 3000) {
            this.l = i;
            break;
        }
    }
    return this.recentCount();
};
