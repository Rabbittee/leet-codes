const marks = [
    ["*", "/"],
    ["+", "-"],
];
const regex = /([\+|\-|\*|\/])/;

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = String(s)
        .split(regex)
        .filter(str => str.trim());
    for (mark of marks) {
        stack = helper(mark, stack);
    }
    return stack[0];
};

function helper(mark, stack) {
    const result = [];
    for (let i = 0; i < stack.length; ) {
        if (mark.includes(stack[i])) {
            result.push(calculateProcess(stack[i], result.pop(), stack[i + 1]));
            i += 2;
        } else {
            result.push(stack[i]);
            i += 1;
        }
    }
    return result;
}

function calculateProcess(mark, l, r) {
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
