interface count {
    [key: number]: number;
}
function intersect(nums1: number[], nums2: number[]): number[] {
    let nums1Map = new Map();
    let result: number[] = new Array();
    
    for(let num of nums1){
        if(!nums1Map[num]) nums1Map[num]=0;
        nums1Map[num] += 1;
    }
    
    for(let num of nums2){
        if(nums1Map[num] > 0) {
            result.push(num);
            nums1Map[num]--;
        }
    }
    return result;
};