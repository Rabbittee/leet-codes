# Solution

### ideas

1. if my next's value equals to my value , then jump over my next, let next of my next to replace itself.
2. if my next's value different to me, then move cursor to next node.
3. repeat step1~step2 .


---

### full code
```javascript
var deleteDuplicates = function(head) {
  let node = head
  let nextNode
  
  if (node===null) { return node }

  while (node.next!=null) {
    nextNode = node.next

    if (node.val === nextNode.val)
      node.next = nextNode.next
    else
      node = nextNode
  }
  return head
}
```