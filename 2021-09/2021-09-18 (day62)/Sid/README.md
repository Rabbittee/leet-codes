# 933. Number of Recent Calls

## Code

```JS
class RecentCounter {
  queue = []
  ping = t => {
    this.queue.push(t)
    this.queue.splice(0, this.queue.findIndex(val => t - val <= 3000))
    return this.queue.length
  }
}
```

## 解題想法

由於此題已經限制執行方式為 `new RecentCounter` 後進行操作，故採用 Class 方式解題

定義佇列 queue 屬性依序儲存時間參數，並在每次 ping 時的時候推入新的參數後移除已逾時之參數

最後回傳 queue 長度作為條件內 ping 數

## leecode 提交結果

Runtime: 357 ms, faster than 46.74% of JavaScript online submissions for Number of Recent Calls.
Memory Usage: 57.1 MB, less than 8.70% of JavaScript online submissions for Number of Recent Calls.

## 備註心得

這題看懂題目比解題難
