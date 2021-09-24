/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = n => {
  return Math.max(
    ...Array(n + 1)
      .fill(0)
      .reduce(
        (acc, n, index) => {
          if (!index) return acc
          if (index <= 2) return [...acc, 1]
          return [...acc, acc[(index / 2) | 0] + (index & 1) * acc[(index / 2 + 1) | 0]]
        },
        [0]
      )
  )
}
