# Integer to Roman

Given an integer, convert it to a roman numeral.

## 解法

1. 列舉所有可能的基本組合。

```javascript
const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
```

2. 宣告一個暫存變數 (`rest`)，先存傳入之數值

3. 使用 `Object.keys()` 來取得基本組合的陣列做 `Array.prototype.reduce()`
    - 將傳入的值除以遍歷到的 `value`，做以下判斷
        - 若大於零
            - 將 `rest` 除以對應 `key` 的值，得到的商值，並回傳該商值數量的 `key` 字串
            - 再將 `rest` 扣掉目前遍歷到的 value
        - 不大於零
            - 甚麼都不做
4. 回傳該 reduce 的值
