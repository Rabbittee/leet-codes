function isUnivalTree(root: TreeNode | null): boolean {
    if(root === null) return true;
    
    root.val;
    const test = (node: TreeNode) => {
        if(!node) return true;
        if(root.val != node.val) return false;
        return test(node.left) && test(node.right);
    }
    return test(root);
}