CXPhoenix's Solution
===

## 104. Maximum Depth of Binary Tree

Given the `root` of a binary tree, return its maximum depth.

A binary tree's *maximum depth* is the number of nodes along the longest path from the root node down to the farthest leaf node.

---

## My Thoughts

- 又是樹的走訪，看到樹走訪，就想到遞迴去計算
- 但是這邊的遞迴不一樣的地方是他要算走的最大層數，所以要另外加一個參數 `count` 去進行遞迴。
- 跟 Day11 的走訪一樣，都是直接遞迴往左走與往右走，但是這次要在最後比較他 `return` 的大小。
- 因此用一個 `max()` function 包起來，確認左大還是又大，然後 `return`。

[solution1](./solution1.py)

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        count = 0
        def throughTheTree(count, node):
            if node is None:
                return count
            return max(throughTheTree(count+1, node.left), throughTheTree(count+1, node.right))
        return throughTheTree(count, root)
```

<img src="./solution.png">

- 但是看完這個，好像可以用自己本身去進行操作，所以我就做了自己遞迴自己的版本

[solution2](./solution2.py)

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        return max(1+self.maxDepth(root.left), 1+self.maxDepth(root.right))
```

<img src="./solution2.png">

- 推測時間差到這樣的原因只是因為要不要多建立 `function` 而已，跟算法時間複雜度無關。

---

## Big-O

solution1 & solution2 -> O(n)