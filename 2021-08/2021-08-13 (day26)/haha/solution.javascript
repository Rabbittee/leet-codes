/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
    let currentNode = head;
    let nodeSet = new Set();
    while (currentNode !== null) {
        // 有接到其中一個 node 就是 T
        if (nodeSet.has(currentNode))
            return true;
        // 新增 node 到集合裡
        nodeSet.add(currentNode);
        // 下一個 node 變成 當前 node
        currentNode = currentNode.next;
    }

    return false;
};