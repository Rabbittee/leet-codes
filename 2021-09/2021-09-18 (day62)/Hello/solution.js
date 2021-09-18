function RecentCounter() {
  const past = [];

  /**
   * @param {number} t
   * @return {number}
   */
  function ping(t) {
    past.push(t);

    while (past[0] < t - 3000) {
      past.shift();
    }

    return past.length;
  }

  return { ping };
}
