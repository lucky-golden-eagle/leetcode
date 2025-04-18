class MinStack {
    private stack: [number, number][]; // [value, minimum up to this point]

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push([val, val]);
        } else {
            const previousMin = this.stack[this.stack.length - 1][1];
            this.stack.push([val, Math.min(val, previousMin)]);
        }
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    getMin(): number {
        return this.stack[this.stack.length - 1][1];
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