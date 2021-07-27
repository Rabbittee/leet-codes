# 83. Remove Duplicates from Sorted List

Easy

## Description

Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list *sorted* as well.

---

## My Thoghts

This problem is simple.
Just check if value of this node is same as next, than breack connect with next.
And reconnect with next of next.
Be aware of overflow if cross node connection.

## O(n)