# 100. Same Tree

Easy

## Description

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## My Thoghts

For this problem I choose DSP not BSP.

Because to implement DSP is easier than BSP.

And I use recursive to resolve it.

The condition to leave recursive is below

1. q == nullptr && q == nullptr, return `true` 
2. one of p,q is nullptr return `false`
3. p != q return `false`
4. Non of these, do recursive.
5. Finally return true.

## O(n)