CXPhoenix's Solution
===

## 13. Roman to Integer

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

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

For example, `2` is written as `II` in Roman numeral, just two one's added together. 
`12` is written as `XII`, which is simply `X + II`. 
The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as `IX`. 
There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

---

## My Thoghts

> 今日小偷懶，不解釋太多

- 看到規則，就知道當我遍歷所有值時，碰到特定的值要檢查下一位是否會有剛好特定條件
- 所以有了 [solution1](./solution1.py)

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        result = 0
        cursor = 0
        while cursor < len(s)-1:
            if s[cursor] == 'I':
                if s[cursor+1] == 'V' or s[cursor+1] == 'X':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            elif s[cursor] == 'X':
                if s[cursor+1] == 'L' or s[cursor+1] == 'C':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            elif s[cursor] == 'C':
                if s[cursor+1] == 'D' or s[cursor+1] == 'M':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            else:
                result += roman[s[cursor]]
                cursor += 1
        if cursor <= len(s)-1:
            result += roman[s[len(s)-1]]
        return result
```

<img src="./solution1.py">

- 但是這太義大利麵了，所以我用 dict 來處理特殊條件，因此出現 [solution2](./solution2.py)

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
            'IV': 4,
            'IX': 9,
            'XL': 40,
            'XC': 90,
            'CD': 400,
            'CM': 900
        }
        result = 0
        cursor = 0
        while cursor < len(s)-1:
            if roman.get(s[cursor]+s[cursor+1]):
                result += roman.get(s[cursor]+s[cursor+1])
                cursor += 2
            else:
                result += roman.get(s[cursor])
                cursor += 1
        if cursor <= len(s)-1:
            result += roman.get(s[len(s)-1])
        return result
```

<img src="./solution2.png">

---

## Big-O

solution1 && solution2 -> `O(n)`