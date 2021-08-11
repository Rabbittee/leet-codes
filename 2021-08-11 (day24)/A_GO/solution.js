var isSymmetric = function(root) {
    let queue = [root,root];
    while(queue.length > 0){
        let left = queue.shift(), right = queue.shift();
        if (left === null && right === null) continue;
        if (left === null || right === null) return false;
        if (left.val !== right.val) return false;
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }
    return true;
};