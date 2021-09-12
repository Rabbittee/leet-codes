function plusOne(digits: number[]): number[] {
    let i:number = digits.length -1
    let overflow = 1
    
    while(i >= 0 ){
        
        if(overflow !== 0 ){
            digits[i] += overflow
            overflow = 0
        }
        
        if(digits[i] > 9){
            digits[i] -= 10
            overflow = 1
        }
        
        i--
    }
    if(overflow !== 0){
        digits.unshift(1)
    }
    return digits
};