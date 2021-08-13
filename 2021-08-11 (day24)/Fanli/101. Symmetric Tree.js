function isSymmetric(root) {
    if(!root)return true
    return compare(root.right,root.left)
};

function compare(left,right){
    //若都為null直接返回true
    if(!left&&!right)return true
    if(left?.val!==right?.val)return false
    //確保對比的是同一個鏡像節點
    return compare(left.right,right.left) && compare(left.left,right.right)
}