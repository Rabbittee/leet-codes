class MinStack {
    myStack: number[];
    min = Infinity;
    constructor() {
        this.myStack = new Array();
    }

    push(val: number): void {
        this.myStack.push(val);
        this.min = Math.min(this.min, val);
    }

    pop(): void {
        let popMin = this.myStack[this.myStack.length-1] === this.min
        this.myStack.splice(-1,1);
        this.min = popMin ? Math.min.apply(null, this.myStack) : this.min;
    }

    top(): number {
        return this.myStack[this.myStack.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */