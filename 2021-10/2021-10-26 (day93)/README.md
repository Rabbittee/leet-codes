# 933. Increasing Order Search Tree

`Easy`

## Description

<p>Given the <code>root</code> of a binary search tree, rearrange the tree in <strong>in-order</strong> so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg" style="width: 600px; height: 350px;" />
<pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
<strong>Output:</strong> [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg" style="width: 300px; height: 114px;" />
<pre>
<strong>Input:</strong> root = [5,1,7]
<strong>Output:</strong> [1,null,5,null,7]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the given tree will be in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
</ul>

---

### Topic Tags

[stack]: https://img.shields.io/badge/-Stack-EF9A9A
[tree]: https://img.shields.io/badge/-Tree-B39DDB
[depth-first-search]: https://img.shields.io/badge/-Depth%20First%20Search-81D4FA
[binary-search-tree]: https://img.shields.io/badge/-Binary%20Search%20Tree-A5D6A7
[binary-tree]: https://img.shields.io/badge/-Binary%20Tree-FFF59D

![Stack][stack]

![Tree][tree]

![Depth-First Search][depth-first-search]

![Binary Search Tree][binary-search-tree]

![Binary Tree][binary-tree]

---

##### [original question](https://leetcode.com/problems/increasing-order-search-tree)
