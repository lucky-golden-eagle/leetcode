/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    while (true) {
        const startIndex = operations * 3;
        if (startIndex >= nums.length) {
            return operations;
        }
        const suffix = nums.slice(startIndex);
        const distinctSet = new Set(suffix);
        if (distinctSet.size === suffix.length) {
            return operations;
        }
        operations++;
    }
};