class RecentCounter {
  pings: number[];

  constructor() {
    this.pings = new Array();
  }

  ping(t: number): number {
    this.pings.push(t);

    while (this.pings[0] < t - 3000) {
      this.pings.shift();
    }

    return this.pings.length;
  }
}