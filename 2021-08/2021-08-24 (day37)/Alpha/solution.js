/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let sum = 0;
    for(i=0;i<prices.length;i++ ) {
        
        if(prices[i]<prices[i+1]) {
            const win = prices[i+1] - prices[i];
            sum+=win;
        }
    }
    return sum;
};