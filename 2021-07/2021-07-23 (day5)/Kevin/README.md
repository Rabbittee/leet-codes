# Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

-   Constraints:

    -   1 <= nums.length <= 104
    -   -104 <= nums[i] <= 104
    -   nums contains distinct values sorted in ascending order.
    -   -104 <= target <= 104

## 解法一

-   Big O(n)
-   地毯式搜索 - 做一次迴圈
-   `./resolution-1.js`

1. 先比較是否在頭尾，是則回傳頭或尾
2. 迴圈找相同的值或在兩值中間
    - 相同值 > 回傳 該位置
    - 兩值中間 > 回傳 下一個值的位置

## 解法二

-   Big O(log n)
-   ~~[對折再對折](https://www.youtube.com/watch?v=VZik4B5LhrM)~~
-   `./resolution-2.js`

1. 先比較是否在頭尾，是則回傳頭或尾
2. 設定預設值。頭 (0)、尾 (nums.length)、中間值 (undefined，後面處理)
3. 對折再對折，尋找目前的頭尾的中間位置在原陣列索引設為中間值，以該值查看與目標值的關係，如下
    - 中間值 = 目標值。找到了，回傳該位置的值
    - 中間值 = 頭的值。代表現在已經縮小範圍到原陣列中的相鄰兩值，亦表示該值位大小於兩值的中間
    - 中間值 < 目標值。代表目標值在目前中間位置的右邊，將頭的值設定為目前的中間值
    - 中間值 > 目標值。代表目標值在目前中間位置的左邊，將尾的值設定為目前的中間值
