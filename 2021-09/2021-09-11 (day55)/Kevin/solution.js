/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (value of tokens) {
        if (!isNaN(Number(value))) {
            stack.push(value);
        } else {
            stack.push(calculate(value, stack.pop(), stack.pop()));
        }
    }
    return stack[0];
};

// * 注意 r, l 的位置是反過來的
function calculate(mark, r, l) {
    [l, r] = [Number(l), Number(r)];
    switch (mark) {
        case "+":
            return l + r;
        case "-":
            return l - r;
        case "*":
            return l * r;
        case "/":
            return Math.trunc(l / r);
    }
}
