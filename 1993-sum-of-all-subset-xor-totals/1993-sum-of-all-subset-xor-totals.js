/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }

    let orValue = 0;
    for (let i = 0; i < n; i++) {
        orValue |= nums[i];
    }

    const multiplier = 1 << (n - 1);

    return orValue * multiplier;
};