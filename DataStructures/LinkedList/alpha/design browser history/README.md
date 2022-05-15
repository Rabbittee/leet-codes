# Design Browser History

## Solution

### Step 1

Declare a doubly linked list's node with value, prev and next.

### Step 2

BrowserHistory methods initializes, so it will create a new node ,use class node.
Then we know it is beginer, so list's head and right now current is this node.

### Step 3

Visit will create a new node and the node value is url.
So beginer current will go to this one.
So this one's prev will be old current one.
And then this one will be the current one.

### Step 4

Back method is let current one go back to prev one.
So we can use while loop go steps and if prev is not null.
Then return it's value.

Forward is similar Back.

### Complexity

- Space complexity

  Linked list is `O(1)`,

- Time complexity

  while loop `O(n) + O(n) = O(n)`
