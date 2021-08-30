type Compare = (a: number, b: number) => Boolean;

abstract class ABinaryHeap {
    // type: true is max heap, false is min heap
    // default min heap
    constructor(heap: number[], type: boolean = false) {
        this.heap = heap;
        this.type = type
    };

    protected heap: number[]; // store value inside heap
    protected type: boolean;
    protected compare: Compare;
    abstract heapify(): void; // sort heap

    abstract isEmpty(): boolean; // if heap is empty, return true
    abstract root(): number; // return value of root
    abstract pop(): number; // pop root value and remove from heap
    abstract push(value: number): void; // insert a value into heap and call heapify to sort
}
class BinaryHeap extends ABinaryHeap {
    constructor(heap: number[], heapType: boolean = false) {
        heap.unshift(0);
        super(heap, heapType);

        this.compare = heapType ? (a:number, b:number)=>a>b : (a:number, b:number)=>a<b;

        this.heapify();
    };

    public heapifySubTree(node: number, length: number, compare: Compare) {

        let left = node * 2;
        let right = node * 2 + 1;
        let pivot: number = this.heap[node];
        if (left < length && compare(this.heap[left], this.heap[node])) {
            pivot = left;
        }
        if (left < length && compare(this.heap[right], this.heap[node])) {
            pivot = left;
        }

        if (pivot != node) {
            [this.heap[node], this.heap[pivot]] = [this.heap[pivot], this.heap[node]];
            this.heapifySubTree(pivot, length, compare);
        }
    }
    public heapify() {
        for (let i = this.heap.length / 2; i < this.heap.length; i++) {
            this.heapifySubTree(i,this.heap.length, this.compare);
        }
    }
    public isEmpty() {
        return this.heap.length == 0;
    }
    public root() {
        return this.heap[1];
    }
    public pop() {
        return this.heap.pop();
    }
    public push(value: number) {
        this.heap.push(value);
        this.heapify();
    }
}

const minHeap = new BinaryHeap([5,2,4,9,5,6,3], false);
const maxHeap = new BinaryHeap([5,2,4,9,5,6,3], true);

console.log(minHeap.pop()); // expected be 2
console.log(maxHeap.pop()); // expected be 9