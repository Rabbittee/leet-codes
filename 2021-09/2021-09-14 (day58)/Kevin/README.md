# Palindrome Linked List

## Submission

Runtime: 179 ms, faster than 70.47% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 76.4 MB, less than 13.80% of JavaScript online submissions for Palindrome Linked List.

## Solution

1. 龜兔賽跑! 
    - 移動速度快的比慢得多移動一倍，當快的已經達到尾端，慢的剛好會在中間(左右，奇數偶數量)
    - 每次前進，快的前進兩個位置，慢的前進一個位置，直到快的那個沒有下個或下下個點
    - 每次前進，要推現在的這個位置進到一個陣列，並傳到下一次
    - 最後回傳結果，得到該 Linked list 的中間位置指標，以及一個儲存從第一個位置存到中間的陣列

```javascript
function race(slow, fast, stack = []){
    if(!fast.next) return [
        slow.next,
        stack,
    ]
    if(!fast.next.next) return [
        slow.next,
        [...stack, slow]
    ]
    stack.push(slow)
    return race(slow.next, fast.next.next, stack)
}
```

2. 開始比較! 如下

```javascript
function checkPalindrome (ary, list){
    if(list.val !== ary.pop().val) return false
    if(ary.length === 0) return true
    return checkPalindrome(ary, list.next)
}
```