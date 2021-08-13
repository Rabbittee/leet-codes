1.  題目編號 題目標題 題目內容 141. Linked List Cycle
    Given head, the head of a linked list, determine if the linked list has a cycle in it.
2.  解題思路
    (1) 創建一個集合
    (2) 如果有 node 進行判斷，沒有直接回傳 false
    (3) 如果有 node，新增 node 到節點裡直到沒有節點為止，如果接得到 node 就代表是一個 cycle
3.  程式碼附完整註解
4.  時間複雜度
