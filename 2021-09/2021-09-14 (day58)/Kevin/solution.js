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
    if(!head.next) return true
    let [start, stack] = race(head, head)
    return checkPalindrome(stack, start)
};

function race(slow, fast, stack = []){
    if(!fast.next) return [
        slow.next,
        stack,
    ]
    stack.push(slow)
    if(!fast.next.next) return [
        slow.next,
        stack
    ]
    return race(slow.next, fast.next.next, stack)
}

function checkPalindrome (ary, list){
    if(list.val !== ary.pop().val) return false
    if(ary.length === 0) return true
    return checkPalindrome(ary, list.next)
}