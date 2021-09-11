function evalRPN(tokens: string[]): number {
    let numberStack: number[] = new Array();
    for(let i = 0; i < tokens.length; i++){
        if(isNumeric(tokens[i])){
            numberStack.push(Number(tokens[i]));
        }else{
            numberStack.push(caculate(numberStack.pop(), numberStack.pop(), tokens[i]));
        }
    }
    return numberStack.pop();
};
    
function isNumeric(str: string): boolean{
    return ['+','-','*','/'].indexOf(str) == -1;
}

function caculate(num1: number, num2: number, operator: string): number{
    let result: number;
    if(operator == '+') result= num2 + num1;
    if(operator == '-') result= num2 - num1;
    if(operator == '*') result= num2 * num1;
    if(operator == '/') result= num2 / num1;
    return Math.trunc(result);
}