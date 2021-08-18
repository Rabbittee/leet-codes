function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow || fast.next === slow) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}
