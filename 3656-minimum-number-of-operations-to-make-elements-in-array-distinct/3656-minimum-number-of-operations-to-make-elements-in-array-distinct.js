/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    while (true) {
        const startIndex = operations * 3; // O(1)
        if (startIndex >= nums.length) { // O(1)
            return operations;
        }
        const suffix = nums.slice(startIndex);
        const distinctSet = new Set(suffix);
        if (distinctSet.size === suffix.length) {
            return operations;
        }
        operations++; // O(1)
    }
};