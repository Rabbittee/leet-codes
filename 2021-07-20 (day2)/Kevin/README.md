# Palindrome Number

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

## 解法

傳入值反轉後若與原數相同則為 Palindrome Number

1. 判斷是否小於零，若是則回傳 `false`。
2. 轉字串、轉陣列、反轉陣列，宣告為 `reverse`。
3. 確認 `reverse` (能走到這邊的 `x` 應為負數) 不會大於限制範圍，若會則回傳 `false`。
4. 傳入之 `x` 轉字串、轉陣列，宣告為 `origin` 用於比對。
5. 透過 `Array.prototype.find()` 比對反轉前後之陣列是否有不相等，若有則回傳 `false`，否則回傳 `true`

## 檢討(?)

-   `find()` 可以改成 every，可以不用判斷 `undefined`，可讀性也比較好。
-   陣列比對還可以拆半比對，陣列後半段可以不用比對。
