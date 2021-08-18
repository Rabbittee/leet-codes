# Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## 解法

1. 存一個 `current`，就可以在搜尋完樹的左側的出來的時候，可以取得該層的深度。

2. 利用 `if(node === null)` 來判斷目前節點是否是個東西

    - 是，則把目前層數與 `max_depth` 比較大小，為 `max_depth` 存入較大之值
    - 不是則不做事

3. 利用 `if(node.left === null && node.right === null )` 判斷該節點是否為尾端

    - 是尾端，則把目前層數與 `max_depth` 比較大小，為 `max_depth` 存入較大之值
    - 不是則不做事

4. 若以上皆非則進入遞迴，並傳入目前層數，等到走完左邊，進入節點右邊的時候一樣可以傳入正確層數
