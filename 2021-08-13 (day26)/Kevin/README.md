# Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

## Solution

1. 建立 [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)、pointer
2. 做個 While 迴圈
    - 條件: 只要 pointer 不是 null 就會跑下去，是 null 則在外面回傳 false
    - 迴圈內判斷
        - 如果使用 pointer.val 當作 key 向 map 取到的 value ( Linked List ) 跟 pointer 的指向是否相同
            - 是，`return true`
            - 否，把目前的 pointer.val 當作 key，pointer 作為 value 存入 Map
