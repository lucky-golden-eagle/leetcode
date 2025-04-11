class RandomizedSet {
    private map: Map<number, number>;
    private list: number[];

    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }
        const indexToRemove = this.map.get(val)!;
        const lastElement = this.list[this.list.length - 1];
        if (indexToRemove !== this.list.length - 1) {
            this.list[indexToRemove] = lastElement;
            this.map.set(lastElement, indexToRemove);
        }
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */