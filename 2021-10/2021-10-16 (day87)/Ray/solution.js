var leafSimilar = function(root1, root2) {
    const leafArray = [];
    const recursive = (nowNode) => {
        if (nowNode.left === null && nowNode.right === null) {
            leafArray.push(nowNode.val);
            return;
        }
        if (nowNode.left) {
            recursive(nowNode.left);
        }
        if (nowNode.right) {
            recursive(nowNode.right);
        }
    }
    recursive(root1, 0);
    recursive(root2, 1);
    
    let leafLength = leafArray.length/2;
    for (let i = 0 ; i < leafLength ; i++) {
        if (leafArray[i] !== leafArray[i+leafLength]) {
            return false;
        }
    }
    return true;
};