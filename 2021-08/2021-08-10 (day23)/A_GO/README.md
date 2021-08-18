# 98. Validate Binary Search Tree
`Medium`

Share
Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;" />
<pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;" />
<pre>

## My Thoghts

Fisrt I compare each left node and right node with parent. If not left < parent or right > parent.
return false.
But it is wrong. All child node value shold smaller than parent value.

So I rewrite it, If we read BST in DFS, use Inorder Traversal we will get a sorted array.
So we just go further and store the value just read.
Compare it is ordered or not. Then return.

## O(N)