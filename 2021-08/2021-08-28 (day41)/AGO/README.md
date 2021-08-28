# 55. Jump Game

`Medium`

## Description

<p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.</p>

<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.</p>

## My thought

In the situation not go to end happens on there is a zero exist. And any route before it will stop and index of 0.

So we just from the end and if meet zero. Record index of zero, and check all `index + nums[index]` is bigger than `index of zero` or not.

If true, means this zero can be past. Reset `zeroIndex` to -1.

If not, means this nums cant go throught to end.

Finally check indexZero, if -1 return or else.