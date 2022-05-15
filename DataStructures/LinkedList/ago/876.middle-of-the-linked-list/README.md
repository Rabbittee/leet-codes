# Solution
Use slow fast pointer
If we want to go to middle of a list which length is unknown. We can create two pointers.
First pointer move 1 step each time, second pointer move 2 steps each time.
When second pointer touch end of list, first pointer will locate at middle of list

# Time Complexity
f(n) = n /2 = O(n)

# Space Complexity
We declare 2 pointers, so f(n) = 2 = O(2)
