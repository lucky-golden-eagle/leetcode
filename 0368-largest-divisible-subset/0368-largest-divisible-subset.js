/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prevIndex = new Array(n).fill(-1);

    let maxSize = 1;
    let maxIndex = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prevIndex[i] = j; // Record that nums[j] precedes nums[i] in this path
                }
            }
        }

        if (dp[i] > maxSize) {
            maxSize = dp[i];
            maxIndex = i;
        }
    }

    const result = [];
    let currentIndex = maxIndex;
    while (currentIndex !== -1) {
        result.unshift(nums[currentIndex]);
        currentIndex = prevIndex[currentIndex];
    }

    return result;
};