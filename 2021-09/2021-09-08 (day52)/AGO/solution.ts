var buildTree = function(preorder, inorder) {
    function createNode(preLeft, preRight, inLeft, inRight) {
        if (preLeft > preRight || inLeft > inRight) return null; // sanity check

        var value = preorder[preLeft],           // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - inLeft,             // count nodes in left subtree
            root  = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left  = createNode(preLeft + 1, preLeft + nLeft, inLeft, index - 1);
        root.right = createNode(preLeft + nLeft + 1, preRight, index + 1, inRight);

        return root;
    }
    
    return createNode(0, preorder.length - 1, 0, inorder.length - 1);
};