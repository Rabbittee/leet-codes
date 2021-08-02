# Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

## 解法

1. 遞迴

2. 傳入兩個 lists，
    - 宣告值，最終值，大值 (bigger)，小值 (smaller)
    - 判斷
        - 皆為 null 回傳 null
        - 其一為 null，smaller 存另一個不為 null 的 list，bigger 不管
        - 兩者皆不為 null，smaller 存小的 list，bigger 存大的的 list
    - 最終值設 smaller 的 val
    - 最終值的 next 設為 `mergeTwoLists(smaller.next, bigger)`
