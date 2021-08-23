function maxProfit(prices) {
    if(prices.length<=1) return 0
    let min = prices[0]
    let profit = 0
    for(let i=1;i<prices.length;i++){
       if(min>prices[i]) min=prices[i]
        else profit=Math.max(profit,prices[i]-min)
    }
    return profit
}