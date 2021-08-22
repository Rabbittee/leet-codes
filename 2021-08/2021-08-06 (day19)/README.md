# 23. Merge k Sorted Lists
Hard


## Description
<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>

<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> lists = []
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> lists = [[]]
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>k == lists.length</code></li>
	<li><code>0 &lt;= k &lt;= 10^4</code></li>
	<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
	<li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li>
	<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>
	<li>The sum of <code>lists[i].length</code> won&#39;t exceed <code>10^4</code>.</li>
</ul>



---

Topic Tags

[linked-list]: https://img.shields.io/badge/-Linked%20List-EF9A9A
![Linked List][linked-list]

[divide-and-conquer]: https://img.shields.io/badge/-Divide%20and%20Conquer-B39DDB
![Divide and Conquer][divide-and-conquer]

[heap-priority-queue]: https://img.shields.io/badge/-Heap%20(Priority%20Queue)-81D4FA
![Heap (Priority Queue)][heap-priority-queue]

[merge-sort]: https://img.shields.io/badge/-Merge%20Sort-A5D6A7
![Merge Sort][merge-sort]

---

##### [original question](https://leetcode.com/problems/merge-k-sorted-lists)
