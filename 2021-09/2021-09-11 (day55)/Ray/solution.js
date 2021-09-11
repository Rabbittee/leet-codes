/**
 * @param {string[]} tokens
 * @return {number}
 */

// wiki : https://zh.wikipedia.org/wiki/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E7%A4%BA%E6%B3%95


const op = ["+", "-", "*", "/"]

var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0 ; i < tokens.length ; i++) {
        if (!op.includes(tokens[i])) {
            stack.push(parseInt(tokens[i], 10));   
        }
        else {
            let stackLength = stack.length
            if (tokens[i] === "+") {
                stack[stackLength - 2] += stack[stackLength - 1];
            }
            if (tokens[i] === "-") {
                stack[stackLength - 2] -= stack[stackLength - 1];
            }
            if (tokens[i] === "*") {
                stack[stackLength - 2] *= stack[stackLength - 1];
            }
            if (tokens[i] === "/") {
                stack[stackLength - 2] = Math.trunc(stack[stackLength - 2] / stack[stackLength - 1]);
            }
            stack.splice(-1, 1);
        }
    }
    
    return stack[0];
};