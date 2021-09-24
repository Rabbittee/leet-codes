# 392. Is Subsequence

<https://leetcode.com/problems/is-subsequence/>

## Code

```JS
const isSubsequence = (s, t) => {
  if (s.length > t.length) return false
  if (!s) return true

  if (t.charAt(0) === s.charAt(0)) s = s.substring(1)
  return isSubsequence(s, t.substring(1))
}
```

## 解題想法

運用遞迴逐一比對 s 與 t 的字元，比對相同則將 s 首字元排除

`s.length > t.length` 時確定無法滿足條件，return false
`!s` 時代表 s 已全數完成比對，return true

## leecode 提交結果

Runtime: 72 ms, faster than 83.64% of JavaScript online submissions for Is Subsequence.
Memory Usage: 41.4 MB, less than 5.27% of JavaScript online submissions for Is Subsequence.

## 備註心得

Subsequence 子序列並不要求 s、t 中間共同元素的連續性

只要確認符合所有元素且順序相同即可
