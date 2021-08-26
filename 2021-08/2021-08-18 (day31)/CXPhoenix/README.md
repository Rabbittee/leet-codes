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

<br /><br />

### :::UPDATE:::

看完妖精的 XOR 解法，重新推演了一次，發現這真是好恐怖的方法！

但是卻很能快速處理問題！

簡單來說，利用 XOR 的特性，碰到交集或都不包含就回 `False` ，其他回 `True`。

|  p  |  q  |  result  |
|-----|-----|----------|
|true |true |  false   |
|true |false|  true    |
|false|true |  true    |
|false|false|  false   |

<img src="./XOR-display.png" width=200>

理解完 XOR 的概念後，我們先來看 Code

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        single = 0
        for num in nums:
            single ^= num
        return single
```

我們就是藉由 XOR 的特性，來達到 solution1 的解法：

- 將值與 `single` 進行 `XOR` 運算，並存回 `single` 中。
- 當直接 `single` 中之前有過的值，也會因為 `XOR` 被刪除。
- 剩下來的就是單一存在的值了。

<img src="./XOR-solution.gif">

<img src="./solution2.png">

---

## Big-O

solutions -> O(n)
