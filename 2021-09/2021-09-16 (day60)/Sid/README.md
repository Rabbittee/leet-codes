# 28. Implement strStr()

## Code

```JS
const strStr = (haystack, needle, index = 0) => {
  if (!needle) return 0

  if (index >= haystack.length || !haystack || needle.length > haystack.length) return -1

  if (haystack.slice(index, index + needle.length) === needle) return index

  return strStr(haystack, needle, index + 1)
}
```

## 解題想法

因為不太喜歡使用 for 迴圈，嘗試使用迭代器、遞迴等方式，最後採用遞迴。

function 開始時依照各項條件進行 return，未滿足任何條件時進行遞迴。

## leecode 提交結果

Runtime: 88 ms, faster than 54.34% of JavaScript online submissions for Implement strStr().
Memory Usage: 44.6 MB, less than 5.12% of JavaScript online submissions for Implement strStr().

## 備註心得

實務上會直接使用 String.prototype.indexOf() 操作
