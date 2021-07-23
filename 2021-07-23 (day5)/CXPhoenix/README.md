CXPhoenix's solution
===

## 35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

---

## My Thoughts

看到了說要使用 O(log n) 的演算法，第一個想到的就是利用二元搜尋樹找到該位置。

### 二元搜尋樹 Binary Search Tree

簡單來說，就是一個已經被排列好的數列，我們藉由「每次都找中間位置的值比大小」的方式進行數值的搜尋。

比較能夠舉例的是猜數字：我們每次都猜上下限數字的正中間，這樣就可以用最快的速度猜到數字。

我們會在左右各放一個 cursor ，並且藉由 cursor 找到 mid 位置，接著把我們的目標數值跟位於 mid 位置的數值進行對比，

這邊特別要說，因為已經排列好數字了（不管是由大到小或是由小到大，通常是由小到大），所以跟 mid 數值比的時候，target 小於 mid 數值，那麼我們就往左邊的字陣列找（右邊的指針重新指向 mid - 1，左邊不動)，而如果 target 比 mid 數值大，那麼我們就會往右邊找（左邊的指針重新指向 mid + 1，右邊不動）。

這樣的過程我們直到左邊的指針等於右邊的指針時停止（表示找到了）。

但是在這題中，因為我們要找的是插入的 index ，所以我們必須在最後多比較一次，確認指針是現在的 index 還是要插入 index+1的位置，

因此我讓在左邊指針大於右邊指針時才會停止。

見 [solution1](./solution1.py)
```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)-1
        while l <= r:
            mid = (r+l)//2
            if target > nums[mid]:
                l = mid +1
            else:
                r = mid - 1
        return l
```


<img src="./solution1.png">

## 為了整齊好看

但是用 while 迴圈中歸在可讀性上面總是差了一點，因此我多寫了用遞迴方式處理的二元搜尋樹實作。

[solution2](./solution2.py)
```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        def searchHelper(l: int, r: int):
            mid = (r + l) // 2
            if r <= l:
                if target > nums[l]:
                    return l+1
                else:
                    return l
            if target > nums[mid]:
                return searchHelper(mid+1, r)
            else:
                return searchHelper(l, mid-1)

        return searchHelper(0, len(nums)-1)
```

有沒有，在可讀性上稍微好一點了吧！

不過加減犧牲了點效能，不過程式碼本來就是寫給人看的，所以清楚有時候比效能更重要囉！

<img src="./solution2.png">

---

## Big O

solution1 && solution2 -> `O(log n)`