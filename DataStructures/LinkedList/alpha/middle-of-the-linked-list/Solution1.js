/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  //first find this list's length
  let node = head;

  let length = 0;

  while (node !== null) {
    length++;

    node = node.next;
  }

  if (length === 0) return null;

  //find middle and reset node is head to find current list
  let middle = Math.floor(length / 2);

  node = head;

  while (middle > 0) {
    node = node.next;

    middle--;
  }
  return node;
};
