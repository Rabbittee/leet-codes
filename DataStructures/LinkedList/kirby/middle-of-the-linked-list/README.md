# Middle of the Linked List

We can introduce some strategy to solve this kind of problem.

Because of Linked List design,
the only way we can know and reach the end of chain
is by following the reference of each node one by one.

If we want to get the length of whole linked list,
we need to trace and count each node by following the link.

Let's setup a cursor called `slow` which can jump one node each time,
then we can assume
the total time that cursor can reach the end of the chain is `n`,
which `n` is the length of the linked list.

To find out the middle of list is by half down the list, which mean `n/ 2`.

Let's setup another counter called `fast` which can jump twice each time,
we can assume the total time to reach the end of `fast` is `n / 2`,
during this moment, `slow` just reach `n / 2` which is the middle of list.

the time complexity of this algorithm is: `O(n / 2)`
