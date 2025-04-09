/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    for (const num of nums) {
        if (num < k) {
            return -1;
        }
    }

    const uniqueNums = new Set();
    for (const num of nums) {
        uniqueNums.add(num);
    }

    let operations = 0;
    for (const u of uniqueNums) {
        if (u > k) {
            operations++;
        }
    }

    return operations;
};