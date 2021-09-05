# Isomorphic Strings

## Solution

1. 跑迴圈
2. 在每一個索引，取得當前字母 "之前的子字串" 是否有出現過 (indexOf)，比對兩字串得到的結果，有不同則 false，走完則 true
