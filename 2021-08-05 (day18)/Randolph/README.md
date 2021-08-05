Randolph's Solution
---

## 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

---

## My Thoughts

-已知target = 串列中某兩數和，且所求[0]必小於所求[1]
-利用迴圈(for i in range)設定一個變數a，其值為target減去nums串列其中i項目的值
-再判斷此時a的值是否等於此串列中剩餘的任意項目，為避免重複判斷到已減去的項目因此加上nums.index(a) != i這個條件
-所求 = [i,nums.index(a)]