var sumOfLeftLeaves = function(root) {
    let totalCount = 0;
    const recursive = (ptr) => {
        
        if (ptr === null) return;
        
        if (ptr.left) {
            if (ptr.left.left || ptr.left.right) {
                recursive(ptr.left);
            } else {
                totalCount = totalCount + ptr.left.val;   
            }
        }
        
        if (ptr.right) {
            recursive(ptr.right);
        }
    }
    
    recursive(root);
    return totalCount;
};