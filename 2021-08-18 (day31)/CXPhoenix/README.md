CXPhoenix's Solutions
===

## 136. Single Number

[original question](https://leetcode.com/problems/single-number)

---

## My Thoughts

看到題目，第一個想法就是儲存一下。

但是如果用 Array 存，在搜尋上比較麻煩，所以我用 Hash Table 去存取。

只要遇到第二個值，就會從記錄中刪除，代表紀錄終止會留下單獨存在的數。

最後就 return 結案

上 code - [solution1](./solution1.py)

<img src="./solution1.png">

---

## Big-O

solution -> O(n)