// O(mn) time, O(mn) space. 100% faster 16.67%less
function minimumTotal(triangle: number[][]): number {
    let dp = triangle;
    let i = 1;
    for(;i < triangle.length; i += 1){
        for(let j = 0; j < triangle[i].length; j += 1){

            if (j == 0){
                dp[i][j] = triangle[i][j] + dp[i - 1][j];
            }
            else if(j == triangle[i].length - 1){
                dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
            }
            else{
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
            }
        }
    }
    return dp[i - 1].sort((a,b)=>a-b)[0];
};

// O(mn) time, O(n) space. 83% faster 43%less
function minimumTotal(triangle: number[][]): number {
    let dp = triangle[0];
    let i = 1;
    
    for(;i < triangle.length; i += 1){
        let temp = dp[0];
        
        for(let j = 0; j < triangle[i].length; j += 1){
            if (j == 0){
                dp[j] = triangle[i][j] + temp;
            }
            else if(j == triangle[i].length - 1){
                dp.push(triangle[i][j] +temp);
            }
            else{
                let pre = dp[j];
                
                dp[j] = Math.min(dp[j], temp) + triangle[i][j];
                temp = pre;
            }
        }
    }
    
    return dp.sort((a,b)=>a-b)[0];
};