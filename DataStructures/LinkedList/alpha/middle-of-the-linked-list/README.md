# Middle of the linked list

## Solution 1

### Step 1

We don't know this linked list length, so first declare node is head, use while loop to count list items number.

Count down if head.next is null then stop.

### Step 2

We have length then we can find the middle index,
so use `Math.floor(length/2)`, to find index.

Noted, in this moment, node is point null, so we have to point head(last node).

Then reverse count down.

Final return this node.

### Complexity

- Space complexity

  Linked list is `O(n)`, and length is `O(1)`,
  so `O(n) + O(1) = O(n)`

- Time complexity

  while loop `O(n) + O(n) = O(n)`

## Solution 2

### Use fast and slow point

### Step 1

Let two point to run, one is simple called slow, the other one is a step go two node called fast.

### Step 2

If fast is run over list, then slow will be this answer.
