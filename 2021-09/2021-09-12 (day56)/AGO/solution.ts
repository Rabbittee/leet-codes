function calculate(s: string): number {
    let tokens = splitToTokens(s);
    let lateCalculate: string[] = new Array();

    // process * or / caculate result. Push result or others into array
    for(let i = 0; i < tokens.length; i+=1){
        if(tokens[i] === '*') {
            lateCalculate.push(`${Number(lateCalculate.pop()) * Number(tokens[i+=1])}`);
        }
        else if(tokens[i] === '/'){
            lateCalculate.push(`${Math.trunc(Number(lateCalculate.pop()) / Number(tokens[i+=1]))}`);
        }else{
            lateCalculate.push(tokens[i]);
        }
    }
    // caculate rest operators
    let result = Number(lateCalculate.shift());
    while(lateCalculate.length > 0){
        let element = lateCalculate.shift();
        if(element === '-'){
            result -= Number(lateCalculate.shift());
        }else if(element === '+'){
            result += Number(lateCalculate.shift());
        }
    }
    return result;
};

// break down string into operators and numbers and filt space
function splitToTokens(s: string): string[]{
    let operators: string[] = ['+','-','*','/'];
    let tokens: string[] = new Array();
    let num: string = '';
    
    for(let i = 0; i < s.length; i+=1){
        if(s[i] == ' ') continue;
        if(operators.indexOf(s[i]) !== -1){
            tokens.push(num);
            tokens.push(s[i]);
            num = '';
        }else{
            num += s[i];
        }
    }
    if(num != '') tokens.push(num);
    return tokens;
}
