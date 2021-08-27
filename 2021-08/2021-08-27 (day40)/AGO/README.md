# 747. Min Cost Climbing Stairs

`Easy`

## Description

<p>You are given an integer array <code>cost</code> where <code>cost[i]</code> is the cost of <code>i<sup>th</sup></code> step on a staircase. Once you pay the cost, you can either climb one or two steps.</p>

<p>You can either start from the step with index <code>0</code>, or the step with index <code>1</code>.</p>

<p>Return <em>the minimum cost to reach the top of the floor</em>.</p>

## Thought

Similar as climging stairs, we use dp to solve this problem.
Use to cost of 1 step before and 2 steps before, than add with cost this step, choose smaller one.

Finally there will be answer.

## O(N)