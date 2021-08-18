# 94. Binary Tree Inorder Traversal
Easy


## Description
<p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes&#39; values</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 202px; height: 324px;" />
<pre>
<strong>Input:</strong> root = [1,null,2,3]
<strong>Output:</strong> [1,3,2]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [1]
</pre>

## My though

use a cursor to store current node pos.

a stack store what we go throught

do deep til end of left node.

pop it from stack and move cursor to it

if what we pop it end of left, than there will no left of right.

We will pop anther one(center of left and right) and move cursor of right of cursor now on.

## O(N)