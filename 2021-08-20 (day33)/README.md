# 287. Find the Duplicate Number

`Medium`

## Description

<p>Given an array of integers <code>nums</code> containing&nbsp;<code>n + 1</code> integers where each integer is in the range <code>[1, n]</code> inclusive.</p>

<p>There is only <strong>one repeated number</strong> in <code>nums</code>, return <em>this&nbsp;repeated&nbsp;number</em>.</p>

<p>You must solve the problem <strong>without</strong> modifying the array <code>nums</code>&nbsp;and uses only constant extra space.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,3,4,2,2]
<strong>Output:</strong> 2
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,1,3,4,2]
<strong>Output:</strong> 3
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,1]
<strong>Output:</strong> 1
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>nums.length == n + 1</code></li>
	<li><code>1 &lt;= nums[i] &lt;= n</code></li>
	<li>All the integers in <code>nums</code> appear only <strong>once</strong> except for <strong>precisely one integer</strong> which appears <strong>two or more</strong> times.</li>
</ul>

<p>&nbsp;</p>
<p><b>Follow up:</b></p>

<ul>
	<li>How can we prove that at least one duplicate number must exist in <code>nums</code>?</li>
	<li>Can you solve the problem in linear runtime complexity?</li>
</ul>


---

### Topic Tags

[array]: https://img.shields.io/badge/-Array-EF9A9A
[two-pointers]: https://img.shields.io/badge/-Two%20Pointers-B39DDB
[binary-search]: https://img.shields.io/badge/-Binary%20Search-81D4FA
[bit-manipulation]: https://img.shields.io/badge/-Bit%20Manipulation-A5D6A7

![Array][array]

![Two Pointers][two-pointers]

![Binary Search][binary-search]

![Bit Manipulation][bit-manipulation]

---

##### [original question](https://leetcode.com/problems/find-the-duplicate-number)