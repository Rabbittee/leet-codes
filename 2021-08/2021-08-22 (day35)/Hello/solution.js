/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  const scores = Array(n).fill(0);

  for (const [person, trusted] of trust) {
    scores[person - 1] -= 1;
    scores[trusted - 1] += 1;
  }

  for (let index = 0; index < scores.length; index++) {
    if (scores[index] === n - 1) return index + 1;
  }

  return -1;
}
