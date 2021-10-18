/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const countNode = (inputNode) => {
    let tempTotal = 0;
    const sumTree = (tempNode) => {

        if (tempNode === null) {
            return;
        }

        tempTotal = tempTotal + tempNode.val;
        if (tempNode.left) {
            sumTree(tempNode.left);
        }

        if (tempNode.right) {
            sumTree(tempNode.right);
        }
    }
    sumTree(inputNode.left);
    let left = tempTotal;
    tempTotal = 0;
    sumTree(inputNode.right);
    let right = tempTotal;
    return (Math.abs(left-right));
}

var findTilt = function(root) {
    
    let finalSum = 0;
    
    if (root === null) {
        return 0;
    }
    
    const recurse = (nowNode, total) => {
        
        if (!nowNode.left && !nowNode.right) {
            return;
        }
        finalSum = finalSum + countNode(nowNode);
        
        if (nowNode.left) {
            recurse(nowNode.left, total);
            
        }
        
        if (nowNode.right) {
           recurse(nowNode.right, total);
        }
    }
    
    recurse(root, 0);
    
    return finalSum;
};