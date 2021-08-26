var isPowerOfThree = function(n) {
    for (i=1;i<=n;i*=3) {
        if ( n === i ) {
            return true 
        } 
    }
    return false
};