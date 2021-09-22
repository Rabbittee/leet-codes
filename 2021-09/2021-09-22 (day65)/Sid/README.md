# 338. Counting Bits

<https://leetcode.com/problems/counting-bits/>

## Code

```JS
const countBits = function (num) {
  return Array(num + 1)
    .fill(0)
    .map((n, i) => i.toString(2).match(/1/g)?.length || 0)
}
```

## 解題想法

因為題目要求從 0 開始，與陣列 index 相對應，故建立長度為 `num + 1` 的陣列後使用 map 方法即可輸出所需數值
map 中將 index 轉為二進制字串後使用 match 方法得出數字 1 的出現次數。

## leecode 提交結果

Runtime: 128 ms, faster than 48.23% of JavaScript online submissions for Counting Bits.
Memory Usage: 49.7 MB, less than 26.92% of JavaScript online submissions for Counting Bits.

## 備註心得

此題要求出 0 到給予的數字全部換算成二進位後，每一個數字中 1 的個數有幾個。
