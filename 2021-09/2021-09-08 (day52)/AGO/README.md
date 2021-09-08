# 105. Construct Binary Tree from Preorder and Inorder Traversal

`Medium`

## Description

<p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>

## My thought

The fist element of preorder should a BFS travelous of tree.

So we use first element to find index of inorder.

Left of inorder will be a left sub tree. And right array is right sub tree.

Then use a recursive to iterate them.

`return TreeNode(node, buildTreeNode(left), buildTreeNode(right))`.

---

Another solution is same as above.

But pass preorder interval and inorder interval as params.

Thus will save more memory.