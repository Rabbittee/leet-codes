/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const index = PEMDAS(s);

  if (index === -1) return Number(s);

  return merge(
    calculate(s.slice(0, index)),
    s.slice(index, index + 1),
    calculate(s.slice(index + 1))
  );
}

function merge(a, operator, b) {
  a = Number(a);
  b = Number(b);

  if (operator === "*") return a * b;
  if (operator === "/") return Math.floor(a / b);
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
}

function PEMDAS(s) {
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === "+") return index;
    if (s[index] === "-") return index;
  }

  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === "*") return index;
    if (s[index] === "/") return index;
  }

  return -1;
}
