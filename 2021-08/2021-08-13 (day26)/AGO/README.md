# 141. Linked List Cycle
Easy


## Description
<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>

<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the&nbsp;<code>next</code>&nbsp;pointer. Internally, <code>pos</code>&nbsp;is used to denote the index of the node that&nbsp;tail&#39;s&nbsp;<code>next</code>&nbsp;pointer is connected to.&nbsp;<strong>Note that&nbsp;<code>pos</code>&nbsp;is not passed as a parameter</strong>.</p>

<p>Return&nbsp;<code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;" />
<pre>
<strong>Input:</strong> head = [3,2,0,-4], pos = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
</pre>

## My Thoghts

use a map to store pointer as key.

and check each time next pointer into.

it should touch if it is a cycle. return true.

if not will escape loop and return false.
## O(n)
---
# Floyd's Algorithm
give a fast and slow pointer

fast move 2 step once, slow move 1 steps once.

If it is cycle, they will touch.

The worst case is when slow into cycle, fast just one step before.

μ = length from start to entry of cycle
λ = cycle length

## O(μ + λ)
---
# Brent's Algorithm
A little bit faster than `Floyd's Algorithm`

fast move 2 power each time if not touch slow or into a cycle.

each time slow move to same position as fast.

## O(μ + λ)