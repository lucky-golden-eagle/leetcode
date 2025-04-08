/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const s = new Set();

    for (let i = nums.length - 1; i >= 0; --i) {
        if (s.has(nums[i])) {
            return Math.floor(i / 3) + 1;
        }
        s.add(nums[i]);
    }

    return 0;
};