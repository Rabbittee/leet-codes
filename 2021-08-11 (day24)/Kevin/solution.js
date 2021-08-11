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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) return true
    let [l,r] = [root.left, root.right]
    
    return checkMirror(l, r)
    
    function checkMirror(_l, _r){
        // * 確認 _l, _r 是否都是 null
        if(_l === null && _r === null) return true
        // * 確認 _l, _r 是否其一是 null
        if(_l === null || _r === null) return false
        // * 此時，_l, _r 都不是 null，確認是否等值
        if(_l.val !== _r.val) return false
        
        return checkMirror(_l.left, _r.right) && checkMirror(_l.right, _r.left)
    }
};