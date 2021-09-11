const operators = ["+", "-", "*", "/"];

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (operators.includes(token)) {
      const b = Number(stack.pop());
      const a = Number(stack.pop());

      if (token === "+") token = a + b;
      if (token === "-") token = a - b;
      if (token === "*") token = a * b;
      if (token === "/") token = Math.trunc(a / b);
    }
    stack.push(token);
  }

  return stack[0];
}
