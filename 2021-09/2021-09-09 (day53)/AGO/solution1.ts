function plusOne(digits: number[]): number[] {
    return add(digits, digits.length -1);
};
function add(digits: number[], index: number){
    if(index == -1){
        digits.unshift(1)
        return digits;
    }
    digits[index] = (digits[index] + 1) % 10;
    if(digits[index] == 0) return add(digits, index-=1);
    return digits;
}