var binaryTreePaths = function(root) {
    let accArray = [];
    const recursive = (accPath, accString) => {
        accString = `${accString}${accPath === root ? '' : '->'}${accPath.val}`;
        if (accPath.left == null && accPath.right == null) {
            accArray.push(accString);
            return;
        }
        if (accPath.left){
            recursive(accPath.left, accString);
        }
        if (accPath.right){
            recursive(accPath.right, accString);
        } 
    }
    recursive(root, "");
    return accArray;
};