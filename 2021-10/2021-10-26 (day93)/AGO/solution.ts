function increasingBST(root: TreeNode | null): TreeNode | null {
    const result = new TreeNode();
    let curr = result;
    
    function recursive(node: TreeNode | null){
        if(node.left) recursive(node.left);
        
        curr.right = new TreeNode(node.val);
        curr = curr.right;
        
        if(node.right) recursive(node.right);    
    }
    
    recursive(root);
    return result.right;
};