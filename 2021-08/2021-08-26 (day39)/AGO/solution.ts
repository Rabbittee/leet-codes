// solution1
function climbStairs(n: number): number {
    let stairs:number[] = new Array();
    stairs[1] = 1;
    stairs[2] = 2;
    
    for(let i = 3; i<=n;i++){
        stairs[i] = stairs[i-1] + stairs[i-2];
    }
    return stairs[n];
};
// solution2
function climbStairs(n: number): number {
    if (n==1) return 1;
    if (n==2) return 2;
    
    let oneStepBefore = 2;
    let twoStepBefore = 1;
    let ans = 2;
    for(let i = 3; i<=n;i++){
        ans = oneStepBefore + twoStepBefore;
        let temp = oneStepBefore;
        oneStepBefore = ans;
        twoStepBefore = temp;
    }
    return ans;
};