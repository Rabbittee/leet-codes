# 11. Container With Most Water

`Medium`

## Description

<p>Given <code>n</code> non-negative integers <code>a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub></code><sub> </sub>, where each represents a point at coordinate <code>(i, a<sub>i</sub>)</code>. <code>n</code> vertical lines are drawn such that the two endpoints of the line <code>i</code> is at <code>(i, a<sub>i</sub>)</code> and <code>(i, 0)</code>. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.</p>

<p><strong>Notice</strong> that you may not slant the container.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />
<pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain&nbsp;is 49.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> height = [4,3,2,1,4]
<strong>Output:</strong> 16
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> height = [1,2,1]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>
</ul>


---

### Topic Tags

[array]: https://img.shields.io/badge/-Array-EF9A9A
[two-pointers]: https://img.shields.io/badge/-Two%20Pointers-B39DDB
[greedy]: https://img.shields.io/badge/-Greedy-81D4FA

![Array][array]

![Two Pointers][two-pointers]

![Greedy][greedy]

---

##### [original question](https://leetcode.com/problems/container-with-most-water)
