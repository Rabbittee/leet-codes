/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  function traverse(tail) {
    if (!tail) {
      return true;
    }

    if (!traverse(tail.next) || head.val !== tail.val) {
      return false;
    }

    head = head.next;

    return true;
  }
  return traverse(head);
}
