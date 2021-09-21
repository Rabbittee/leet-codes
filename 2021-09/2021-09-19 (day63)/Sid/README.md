# 622. Design Circular Queue

<https://leetcode.com/problems/design-circular-queue/>

## Code

```JS
/**
 * @param {number} k
 */
function MyCircularQueue(k) {
  const queue = Array(k)
  let head = -1
  let tail = -1
  /**
   * @param {number} value
   * @return {boolean}
   */
  const enQueue = value => {
    if (isFull()) return false
    if (isEmpty()) head = 0
    queue[(tail = (tail + 1) % k)] = value
    return true
  }
  /**
   * @return {boolean}
   */
  const deQueue = () => {
    if (isEmpty()) return false
    if (head === tail) {
      head = -1
      tail = -1
      return true
    }
    head = (head + 1) % k
    return true
  }
  /**
   * @return {number}
   */
  const Front = () => {
    return isEmpty() ? -1 : queue[head]
  }
  /**
   * @return {number}
   */
  const Rear = () => {
    return isEmpty() ? -1 : queue[tail]
  }
  /**
   * @return {boolean}
   */
  const isEmpty = () => {
    if (head === -1) return true
    return false
  }
  /**
   * @return {boolean}
   */
  const isFull = () => {
    if ((head + k - 1) % k === tail) return true
    return false
  }

  return {
    enQueue,
    deQueue,
    Front,
    Rear,
    isEmpty,
    isFull,
  }
}
```

## 解題想法

### 狀態設置

首先定義 queue、head、tail 三個狀態，分別作為佇列本身、起始（First In）資料 index、最末（Last In）資料 Index。

且將 head、tail 初始設置為 -1 作為空佇列起始狀態

### 判斷方法

首先完成 isEmpty、isFull 兩個方法，提供 enQueue 及 deQueue 中判斷佇列狀態使用

### 佇列資料增加方法

enQueue 時判斷佇列已滿則直接 return false，判斷為空時因已注入資料，則將 head 設置為 0

而這時使用 `(tail + 1) % k` 透過除以佇列最大值取得餘數，來定義並更新正確的佇列位置

### 移除佇列資料方法

若佇列為空則直接 return false

同時若 head、tail 相等，則代表當下佇列僅有一筆資料

因為若 `tail === head -1` 時，就會因為 isFull 而無法 enQueue

而 deQueue 時我們預期則會增加 head 使 head 貼近 tail

因此若當下佇列僅有一筆資料，卻又 deQueue 時，將 head、tail 重置為 -1 狀態代表佇列清空

### 取值方法

透過 Front、Rear 兩個方法取值，則判斷空佇列時回傳 -1，否則透過 haed、tail 正確回傳佇列資料

## leecode 提交結果

Runtime: 120 ms, faster than 72.50% of JavaScript online submissions for Design Circular Queue.
Memory Usage: 46.3 MB, less than 27.08% of JavaScript online submissions for Design Circular Queue.

## 備註心得

看題目的時候，感覺很難理解 Circular Queue 到底是什麼、有什麼需求、解決了什麼問題

所以這題去參考了別人的解答，從 Code 去反推才理解需求

也感謝一同刷題的同伴分享了相關的資訊：

> 說明一下 circular queue的用途
通常是你要傳接大量資料 同時又要做跨執行緒/非同步處理
怕會overflow  這個資料漏了也沒關係
就會用circular queue  去做緩存處理
<http://wayne.cif.takming.edu.tw/datastru/queue.pdf>
<http://ds.klab.tw/pdf/chapter4_2.pdf>
