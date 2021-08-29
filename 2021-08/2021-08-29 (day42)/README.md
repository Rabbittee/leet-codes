# Day 42 Binary Heap

Extend and implement a bianry heap class below.

```ts
abstract class BinaryHeap{
    // type: true is max heap, false is min heap
    // default min heap
    constructor(type: bool = false);
    constructor(heap:number[], type: bool = false);

    private heap: number[]; // store value inside heap
    private type: bool;
    private heapify(): void; // sort heap

    public IsEmpty(): bool; // if heap is empty, return true
    public top(): number; // return max/min value in heap
    public pop(): number; // pop  max/min value and remove from heap
    public push(value: number); // insert a value into heap and call heapify to sort
}
```

Here is some introduction

http://alrightchiu.github.io/SecondRound/priority-queuebinary-heap.html

https://medium.com/@Kadai/%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E5%A4%A7%E4%BE%BF%E7%95%B6-binary-heap-ec47ca7aebac
