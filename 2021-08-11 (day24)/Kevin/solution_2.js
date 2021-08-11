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
var isSymmetric = function (root) {
    if (root === null) return true;
    let firstTime = [root.left, root.right];

    return checkArray(firstTime);

    function checkArray(ary) {
        let [l, r] = [0, ary.length - 1];
        let [nL, nR] = [[], []];

        while (l < r) {
            if (ary[l] === null && ary[r] === null) {
                l++;
                r--;
                continue;
            }
            if (ary[l] === null || ary[r] === null) return false;
            if (ary[l].val !== ary[r].val) return false;

            nL.push(ary[l].left, ary[l].right);
            nR.push(ary[r].right, ary[r].left);
            l++;
            r--;
        }

        if (ary.length < 1) return true;
        return checkArray([...nL, ...nR.reverse()]);
    }
};
