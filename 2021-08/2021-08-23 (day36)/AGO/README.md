# 121. Best Time to Buy and Sell Stock

`Easy`

## Description

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>

<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>

## My though

I found a way called `Kadane's Algorithm`, it is used to solve `Maximum Subarray Problem`.
We can just use one loop to calulate result.

Compare get diff with previos value and plus it with the maximum got last time.
The value will be max in any possible comiantion.

If max become negative, set it to zero.

And record the biggest one when doing loop, there will be answer.

## O(N)