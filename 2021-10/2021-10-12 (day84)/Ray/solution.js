var canThreePartsEqualSum = function(arr) {
    
    let totalSum = 0;
    let count = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        totalSum = totalSum + arr[i];
    }
    
    let goal = totalSum/3;
    let accNumber = 0;
    
    while(count < 3 && arr.length) {
        
        accNumber += arr.shift();
        
        if (accNumber === goal) {
            accNumber = 0;
            count++;
        }
    }
    return count === 3;
};