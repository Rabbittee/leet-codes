function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const result = new ListNode(0);
  let current = result;
  let sum = 0;

  do {
    const node = new ListNode(sum);

    if (l1) {
      node.val += l1.val;

      l1 = l1.next;
    }

    if (l2) {
      node.val += l2.val;

      l2 = l2.next;
    }

    sum = 0;

    if (node.val >= 10) {
      node.val %= 10;

      sum += 1;
    }

    current.next = node;
    current = node;
  } while (l1 || l2 || sum);

  return result.next;
}
