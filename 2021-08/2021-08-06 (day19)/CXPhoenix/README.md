CXPhoenix's Solution
===

## 23. Merge k Sorted Lists

<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>

<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>

---

## My Thoughts

- 不免抱怨，如果這題是單純的 `array` 或 `list` ，應該會好做很多...
- 在處理 `linked list` 上，我不確定能用什麼樣的演算法來加快處理速度，所以我決定先繞開這個限制。
- 我先把這些 `linked list` 的值存入一個 `list` 中，但是存入的過程中就利用 `二元搜尋法` 進行排列。
- 都排完後，再把該陣列變成一個 `linked list`。
- 於是有了 [solution1](./solution1.py)

```python

```

<img src="./solution1.png">

- 因為時間有限，還有其他事情要弄，所以今天就決定，等別人的更佳解來學習...(對不起我偷懶了..)

---

## Big-O

solution1 -> O(nlogn+n)