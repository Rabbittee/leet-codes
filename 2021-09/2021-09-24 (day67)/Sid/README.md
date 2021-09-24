# 1646. Get Maximum in Generated Array

<https://leetcode.com/problems/get-maximum-in-generated-array/>

## Code

```JS
const getMaximumGenerated = n => {
  return Math.max(
    ...Array(n + 1)
      .fill(0)
      .reduce(
        (acc, n, index) => {
          if (!index) return acc
          if (index <= 2) return [...acc, 1]
          return [...acc, acc[(index / 2) | 0] + (index & 1) * acc[(index / 2 + 1) | 0]]
        },
        [0]
      )
  )
}
```

## 解題想法

建立 n + 1 長度的陣列後使用 reduce 方法運算得出符合題目條件之陣列後，後過 Math.max 取得數字最大值

解題關鍵在 3 以上的奇數值需額外加值計算

而 `index & 1` 效果等價於 `index % 2`，若為偶數時值為 0 奇數時數值為 1，乘以後方 `acc[(index / 2 + 1) | 0]` 以正確計算數值

`index / 2` 可能出現小數位數影響取值，透過位元運算無視小數之特性使用 `(index / 2) | 0` 取整數並避免影響運算結果

## leecode 提交結果

Runtime: 68 ms, faster than 95.52% of JavaScript online submissions for Get Maximum in Generated Array.
Memory Usage: 42.2 MB, less than 5.38% of JavaScript online submissions for Get Maximum in Generated Array.

## 備註心得

使用位元運算可以提高許多效能

位元運算參考網頁： <https://yakimhsu.com/project/project_w2_Javasciprt_01.html>
