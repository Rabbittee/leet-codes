function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function split(head, slow = head, fast = head, prev = head) {
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return [head, slow];
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  if (l2.val >= l1.val) {
    l1.next = mergeTwoLists(l1.next, l2);
  }

  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    l1 = l2;
  }

  return l1;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  if (!head || !head.next) return head;

  const [left, right] = split(head);

  return mergeTwoLists(sortList(left), sortList(right));
}
