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
<strong>Input:</strong> root = [5,1,4,null,null,3,6]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node&#39;s value is 5 but its right child&#39;s value is 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>



---

Topic Tags

[tree]: https://img.shields.io/badge/-Tree-EF9A9A
![Tree][tree]

[depth-first-search]: https://img.shields.io/badge/-Depth-First%20Search-B39DDB
![Depth-First Search][depth-first-search]

[binary-search-tree]: https://img.shields.io/badge/-Binary%20Search%20Tree-81D4FA
![Binary Search Tree][binary-search-tree]

[binary-tree]: https://img.shields.io/badge/-Binary%20Tree-A5D6A7
![Binary Tree][binary-tree]

---

##### [original question](https://leetcode.com/problems/validate-binary-search-tree)
