# 122. Best Time to Buy and Sell Stock II

`Easy`

## Description

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).</p>

<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>

## My Thought

After a while oberservation, I found just buy when next day price is larget than today, and sell when the day price will drop tomorrow.

## O(N)