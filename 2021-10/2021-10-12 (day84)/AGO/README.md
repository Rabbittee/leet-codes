# 1062. Partition Array Into Three Parts With Equal Sum

`Easy`

## Description

<p>Given an array of integers <code>arr</code>, return <code>true</code> if we can partition the array into three <strong>non-empty</strong> parts with equal sums.</p>

<p>Formally, we can partition the array if we can find indexes <code>i + 1 &lt; j</code> with <code>(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])</code></p>

# My Thought

If it is can partion to 3 same sum sets, it should be founded mutiple of 3 / sum when we add numbers in array one by one.

# O(n)