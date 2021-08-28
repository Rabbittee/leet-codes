function canJump(nums: number[]): boolean {
    let zeroIndex = -1;
    for(let i = nums.length-2; i>= 0;i-- ){
        if(zeroIndex != -1){
            if(i + nums[i] > zeroIndex){
                zeroIndex = -1;
            }
        }else{
            if(nums[i] == 0){
                zeroIndex = i;
                console.log(`zero index = ${zeroIndex}`);
            }
        }
    }  
    return zeroIndex == -1;
};
