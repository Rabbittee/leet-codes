# Solution

1. Create a doubly linked list.
2. When browser opened, create first node store url as homepage. 
3. Visit new page, create new node, set `next = currentPage` and `move current page to new node`
4.  `Back` means goto previous page of current, move 1 page previous and -1 steps, til `steps = 0` or `prev == nil`.
5.  Same as `Forward` doing.

## Time Complexity
Depends on forward of back steps which as input.
`f(n) = O(n)`

## Space Complexity
Space usage of store browser history rely on length of record.
`f(n) = O(n)`