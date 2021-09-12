function plusOne(digits: number[]): number[] {
    let add = 1;
    let index = digits.length;
    while(add){
        index -=1
        if(index == -1) digits.unshift(1);
        digits[index] = (digits[index] + add) % 10;
        add = (digits[index] == 0) ? 1 : 0;
    }
    return digits;
};