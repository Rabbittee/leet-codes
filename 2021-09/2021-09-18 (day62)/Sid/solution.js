class RecentCounter {
  queue = []
  ping = t => {
    this.queue.push(t)
    this.queue.splice(0, this.queue.findIndex(val => t - val <= 3000))
    return this.queue.length
  }
}
