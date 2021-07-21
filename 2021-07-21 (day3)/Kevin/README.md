# Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

## 解法

### 主要想法

把字串反過來，跟原字串比對是否有相同內容，比對完一次往右橫移一個字 (反轉)

1. 直接回傳字串長度 1 的值
2. 每次比對時，比對兩字串(轉成陣列)，遇到相同位置有相同的值時 push 到暫存陣列，直到沒有比對成功，將該暫存陣列存起來，依此方法一次比對可能會得到好幾組陣列。
3. 最後將得到的一堆暫存陣列，回傳最長的陣列 (不論有幾個並列第一長，隨意回傳)

```
/*
* ex:
* 原字串 (abcde)
* 反轉字串 (edcba)
*/

// 第一次比對
a b c d e
a

// 第二次比對
a b c d e
b a

// 第三次比對
a b c d e
c b a

...

// 第N次
a b c d e
e d c b a

...

// 第N+N次
a b c d e
        e

```

### 解法

Submit 之後才發現只有比對一半 (第 N 次~第 N+N 次，忘了考慮...)
所以後半段來不及寫啦!

準備眼瞎了嗎
.
.
.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s;

    const origin = s.split("");
    const reverse = s.split("").reverse().join("");
    const tempResults = [];

    let mark = [];
    let currentMatch = [];

    for (let i = 1; i <= s.length; i++) {
        // 取得要比對的陣列
        const currentTarget = reverse.slice(0, i);
        for (let j = 0; j < s.length; j++) {
            // 從反轉的陣列跟原陣列比對，兩陣列是否有相同 index 下相同的值，若有則存入暫存陣列 (currentMatch)
            if (origin[j] === currentTarget[j]) {
                currentMatch.push(origin[j]);
                // 要確保當 j 來到最後一個而且暫存陣列大於目前已經存的陣列，通過前述條件則重置暫存陣列，
                if (j === s.length - 1 && currentMatch.length > mark.length) {
                    // 重置暫存陣列
                    mark = currentMatch;
                    currentMatch = [];
                }
            } else if (origin[j] !== currentTarget[j]) {
                if (currentMatch.length !== 0) {
                    // 如果暫存陣列已經有內容且超過目前存取最長的陣列
                    if (currentMatch.length > mark.length) {
                        // 重置暫存陣列
                        mark = currentMatch;
                        currentMatch = [];
                    }
                }
            }
        }
    }
    return mark.length > 0 ? mark.join("") : s[0];
};
```
