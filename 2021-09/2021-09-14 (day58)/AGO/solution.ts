function isPalindrome(head: ListNode | null): boolean {
  let prev: ListNode | null = null; // also reverse;

  let slow = head;
  let fast = head;

  let count = 0;

  while (1) {
    if (fast == null) break;
    if (fast.next == null) {
      count += 1;
      break;
    }

    const temp = slow;
    fast = fast.next.next;
    slow = slow.next;

    if (prev !== null) temp.next = prev;

    prev = temp;
    count += 2;
  }

  // if length is odd
  if (count % 2 !== 0) slow = slow.next;

  while (slow !== null && prev !== null) {
    if (slow.val !== prev.val) return false;
    slow = slow.next;
    prev = prev.next;
  }
  return true;
};