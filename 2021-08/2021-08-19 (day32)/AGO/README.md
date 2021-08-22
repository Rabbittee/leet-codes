# 268. Missing Number

`Easy`

## Description

<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p>

<p><b>Follow up:</b> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,0,1]
<strong>Output:</strong> 2
<b>Explanation</b><strong>:</strong> n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
</pre>

## My though

As the hint of this question, we can confirm all number shold be <= length. And > then 0.

So I will loop all nums in array and add them with result, in the same tme, `Minus the index + 1`.

Therefore we will find the num missing.