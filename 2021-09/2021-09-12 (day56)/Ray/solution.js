/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    // Concept is near to Day 55 (Evaluate Reverse Polish Notation) (150)
    // Use stack to record the calculate.
    
    let stack = s.split("");
    const answerStack = [];
    const op = ["+", "-", "*", "/"];
    const priorityFirstOp = ["*", "/"];
    
    // 1. Refactor the source data in array
    stack = stack.filter((item) => item !== " ");
    
    let numberFlag = 0;
    for (let i = 0 ; i < stack.length ; i++) {
        if (!isNaN(stack[i])) {
            if (numberFlag) {
                stack[i] = numberFlag + stack[i];
                stack.splice(i-1, 1);
                i--;
            }
            numberFlag = stack[i];
        } else {
            numberFlag = 0;
        }
    }
    
    // 2. Use the stack method to let the last element measure
    //    If the answerStack length >== 5, we need to conclusion the array again 
    for (let i = 0 ; i < stack.length ; i++) {
        answerStack.push(stack[i]);
        if (priorityFirstOp.includes(stack[i])) {
            if (stack[i] === "*") {
                answerStack[answerStack.length-2] = answerStack[answerStack.length-2] * stack[i+1];
                i++;
            }
            if (stack[i] === "/") {
                stack[i-1] = Math.trunc(stack[i-1] / stack[i+1]);
                answerStack[answerStack.length-2] = Math.trunc(answerStack[answerStack.length-2] / stack[i+1]);
                i++
            }
            answerStack.pop();
        }
        if (answerStack.length === 5) {
            if (answerStack[1] === "+") {
               answerStack[0] = Number(answerStack[0]) + Number(answerStack[2]);
            }
            if (answerStack[1] === "-") {
               answerStack[0] = answerStack[0] - answerStack[2];
            }
            answerStack.splice(1,2);
        }
    }
    
    // It is the final check if the answerArray still have 3 element
    if (answerStack[1] === "+") {
       answerStack[0] = Number(answerStack[0]) + Number(answerStack[2]);
    }
    if (answerStack[1] === "-") {
       answerStack[0] = answerStack[0] - answerStack[2];
    }
    
    return answerStack[0];
};