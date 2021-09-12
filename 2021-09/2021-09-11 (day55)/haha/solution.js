/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length === 1) return tokens
    let table = []
    let answer = 0
    tokens.forEach(el=>{
        isNaN(el) ? answer = math(table, el) :　table.push(el)
    })
    return answer
};

function math (arr, operation) {
    let el2 = parseInt(arr.pop())
    let el1 = parseInt(arr.pop())
    let result = 0
    switch(operation) {
        case '+':
            result = el1 + el2
            break;
        case '-':
            result = el1 - el2
            break;
        case '*':
            result = el1 * el2
            break;
        case '/':
            result = Math.trunc(el1 / el2)
            break;
        default:
            console.log('kevin is best')
            break;
    }
    arr.push(result)
    return result
}