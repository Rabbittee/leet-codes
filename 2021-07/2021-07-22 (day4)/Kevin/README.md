# Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

-   Constraints:

    -   1 <= s.length <= 104
    -   s consists of parentheses only '()[]{}'.

## 思路

1. 傳入的字串跑迴圈
2. 如果遇到左括號則放入 stack，
3. 遇到右括號，則與 stack 最新放進去的項目比對
    - 配對成功，送入洞房，從 stack 移除
    - 配對失敗，找到單身仔，直接跳出迴圈，並記錄一個 false
4. 跑完迴圈之後確認 stack 是否有任何剩下的項目。
    - 有，代表該項目沒有右括號，回傳 false
    - 沒有，代表沒有東西，如果前面的迴圈記錄的值不為 false 則回傳 true

## 參考

[stack](https://blog.techbridge.cc/2016/06/24/javascript-data-structure-algorithm-stack/)
[有趣解法](<https://leetcode.com/problems/valid-parentheses/discuss/1293933/Simplest-JS-solution-O(n)time-and-space-Beats-99.95>)
