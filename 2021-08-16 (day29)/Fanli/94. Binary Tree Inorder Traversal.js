function inorderTraversal(root) {
    let res = []
    const _inorderTraversal = function(node){
        if(!node) return
        _inorderTraversal(node.left)        
        res.push(node.val)
        _inorderTraversal(node.right)
    }
    _inorderTraversal(root)
    return res
};