# Design Browser History

## Prepare `Node`

First, we need to introduce `Node` for our _data container_,
not only value, we also need to put the reference to the _next_ and _prev_ node.

```js
function Node(value, prev, next) {
  const node = {
    value,
    prev,
    next,
  };

  if (prev) prev.next = node;

  return node;
}
```

Now, we're ready to implement our `Browser History`.

## `constructor`

Our `Browser History` include three method `visit`, `back`, `forward` and also `constructor`.

First we start from `constructor`,

```js
let current = Node(homepage);
```

we create our first node to save the initial param,
which also become the current node.

the time complexity of this function is `O(1)`.

## `visit`

if user call `visit`, which mean we have to:

1. create a new node
2. assign current node to new node's previous attribute
3. set current node to new node

seems like we reset the node by create a new one,
we don't have to clear out the forward link.

the time complexity of this function is `O(1)`.

## `back`

In linked list, any navigation should follow the reference one by one,
we using recursion for this implementation,
each call will
set current node to previous node which can be found on `prev` attribute on node,
and call back function again with `steps - 1`.

the base case is when steps less than or equal 0,
or we don't have any previous node,
then return the current node value out.

the time complexity of this function is `O(n)`.

```js
function back(steps) {
  if (steps <= 0 || !current.prev) return current.value;

  current = current.prev;
  return back(steps - 1);
}
```

## `forward`

each call will
set current node to next node which can be found on `next` attribute on node,
and call forward function again with `steps - 1`.

the base case is when steps less than or equal 0,
or we don't have any next node,
then return the current node value out.

the time complexity of this function is `O(n)`.

```js
function forward(steps) {
  if (steps <= 0 || !current.next) return current.value;

  current = current.next;
  return forward(steps - 1);
}
```
