# Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

## Solution

- 對症下藥之術

1. 依題意所述，"nums 內的所有數字" 加上 "output 值" 必定是一個從 1 開始到 n 、差為 1 的等差數列。( 若該數列長度為 n，則該數列為 1, 2, 3, ... ,n )
2. 所以答案只需要把 "以 nums.length 為 n 的等差數列總和" 減掉 "nums 的總和" 即為解答

- P.S. 該數列總和的公式是梯形公式