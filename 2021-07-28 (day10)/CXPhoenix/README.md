CXPhoenix's solution
===

## 12. Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

---

## My Thoughts

- 上次有做了羅馬數字變成整數，這次改成從整數變成羅馬數字，其實想法是一樣的。
- 監測出現的字詞，並且驗證該字詞是否出現在 hash table 裡面。
- 藉由多一個變數 now，測得現在所在的位數，可以對應到哪些羅馬數字。
- 當檢測到在裡面的時候，直接丟給變數 `tmp`
- 當沒檢測在裡面時就進行運算，首先運算如果大於 `5 * now` 的值，則將值先扣掉 `5 * now`，不然就不用扣。
- 接著就是算出有幾次 `now`。
- 最後丟給 `roman` 結束這一回合。

[solution](./solution.py)

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        case={
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        }
        roman = ''
        now = 1
        while num > 0:
            tmp = ''
            n = (num % 10)*now
            if case.get(n):
                tmp += case.get(n)
            else:
                if n > (5 * now):
                    tmp += case.get(5*now)
                    n -= 5*now
                tmp += case.get(now)*(n//now)
            roman = tmp + roman
            now *= 10
            num //= 10
        return roman
```

<img src="./solution.png">

---

## Big-O

O(n) -> n is length of str(num)