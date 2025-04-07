/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = nums.length;
    if (n < 2) {
        return false;
    }

    let totalSum = 0;
    for (const num of nums) {
        totalSum += num;
    }

    if (totalSum % 2 !== 0) {
        return false;
    }

    const targetSum = totalSum / 2;
    const dp = new Array(targetSum + 1).fill(false);

    dp[0] = true;

    for (const num of nums) {
        for (let j = targetSum; j >= num; j--) {
            if (dp[j - num]) {
                 dp[j] = true;
            }
        }
        if (dp[targetSum]) {
             return true;
        }
    }

    return dp[targetSum];
};