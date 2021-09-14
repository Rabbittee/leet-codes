/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
    let ptr = head;
    
    while(ptr) {
        stack.push(ptr.val);
        ptr = ptr.next;
    }
    
    let isPalindrome = true;
    for (let i = 0 ; i < stack.length/2  ; i++) {
        if (stack[i] !== stack[stack.length -i-1]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};