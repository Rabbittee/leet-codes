# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Solution

-   O(n)

-   宣告 temp (array)、index (number)

-   跑迴圈，把每個存取到的值扣掉 target 後，該值存入 temp
    -   每次迴圈遇到的值若有與 temp 中的任意位置的值相同，則找到配對
    -   若找到配對則回傳
        1. temp 中配對成功的值的索引
        2. 目前迴圈進行到的索引
    -   由於題目明示一定有解，所以結束的條件直接設為 "目前迴圈到的數字是否存在在 temp 中"
