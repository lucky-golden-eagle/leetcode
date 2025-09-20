/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.queue = new Queue();
    this.set = new Set();
    this.perDestination = new Map();
    this.removedCount = new Map();
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const key = `${source}_${destination}_${timestamp}`;
    if (this.set.has(key)) return false;
    this.set.add(key);

    if (this.queue.size() === this.memoryLimit) {
        const removed = this.queue.dequeue();
        this.set.delete(removed.join("_"));
        this.removedCount.set(removed[1], (this.removedCount.get(removed[1]) || 0) + 1);
    }

    this.queue.enqueue([source, destination, timestamp]);
    const times = this.perDestination.get(destination);
    if (times) times.push(timestamp);
    else this.perDestination.set(destination, [timestamp]);

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    const result = this.queue.isEmpty() ? [] : this.queue.dequeue();
    if (result.length) {
        this.set.delete(result.join("_"));
        this.removedCount.set(result[1], (this.removedCount.get(result[1]) || 0) + 1);
    }
    return result;
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    const arr = this.perDestination.get(destination) || [];
    const removed = this.removedCount.get(destination) || 0;

    const lowerBound = (target) => {
        let left = removed, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return left;
    }

    const upperBound = (target) => {
        let left = removed, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > target) right = mid;
            else left = mid + 1;
        }
        return left;
    }

    const startIdx = lowerBound(startTime);
    const endIdx = upperBound(endTime);

    return endIdx - startIdx;
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */