# Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

-   Constraints:

    -   0 <= s.length <= 5 \* 104
    -   s consists of English letters, digits, symbols and spaces.

## 解法

1. 宣告兩個變數，一個紀錄長度 (`length`)，一個暫存陣列 (`temp`) 存目前沒有重複字的陣列
2. 跑一次迴圈
    1. 判斷是否重複、紀錄長度與暫存陣列
        1. 判斷目前暫存陣列 (`temp`) 是否存有目前遍歷到的字
            - 有
                - 比較目前暫存陣列長度與 `length` 何者較長，將 `length` 存為大的值
                - 從 `temp` 裡現有的重複字的位置往後推一位，截掉並保留後面那一段，必須確保 `temp` **不包含** 重複字
            - 沒有
                - 往後走
        2. 是否為陣列 (傳入的原字串) 尾端
            - 比較目前 `temp + 1` 與 `length` 的大小 (因為此時 `temp` 目前不包含陣列最後一個值)，`length` 存大的那個值
    2. 把目前遍歷到的字放到暫存陣列的尾端
3. 回傳長度 (`length`)
