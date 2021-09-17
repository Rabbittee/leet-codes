# 168. Excel Sheet Column Title

## Code

```JS
const convertToTitle = (columnNumber, result = '') => {
  columnNumber--
  const char = String.fromCharCode((columnNumber % 26) + 65)

  if (columnNumber < 26) return char + result

  return convertToTitle(Math.trunc(columnNumber / 26), char + result)
}
```

## 解題想法

遞迴的方式對剩餘數字進行運算及字元轉換，透過程式實作數碼轉換時運用的「短除法」

首先將 columnNumber - 1，這樣是避免 26 的倍數整除歸零，造成無法正確取得 Z

當數字小於英文字數 26 時，return 累計結果

未滿足條件則持續遞迴

## leecode 提交結果

Runtime: 72 ms, faster than 64.94% of JavaScript online submissions for Excel Sheet Column Title.
Memory Usage: 39 MB, less than 9.18% of JavaScript online submissions for Excel Sheet Column Title.

## 備註心得

提交後研究其他夥伴解法，看到 Hello 也採用遞迴的方式，但撰寫方式更精簡優美

利用遞迴持續疊入 stack 並在 return 後層層 return 的機制，不額外使用參數便能正確回傳累計結果

註記以此為參考：

```JS
function convertToTitle(columnNumber) {
  columnNumber -= 1;

  const base = 26;

  const char = String.fromCharCode((columnNumber % base) + 65);

  return base > columnNumber
    ? char
    : convertToTitle(Math.floor(columnNumber / base)) + char;
}
```