function isValidBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
    //邊界值
    if (!root) return true
    //超出範圍即為false
    if (root.val >= max || root.val <= min) return false    
    //判斷左子樹和右子數
    return (isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max))
};