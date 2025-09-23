/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, zeros = 0, best = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros > 1) {
        if (nums[left] === 0) zeros--;
        left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best - 1;
};