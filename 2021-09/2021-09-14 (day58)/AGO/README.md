
`Easy`

## Description

<p>Given the <code>head</code> of a singly linked list, return <code>true</code> if it is a palindrome.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" style="width: 422px; height: 62px;" />
<pre>
<strong>Input:</strong> head = [1,2,2,1]
<strong>Output:</strong> true
</pre>

## My Thought

use 2 pointers, slow move 1 step 1 time & fast move 2 steps 1 time.
Find the end of list, and the length of list.

And create a reverse link.
Start from middle of link to head and tail.
Check it is palindrome.