/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxFreq = 0;
    for (const count of freq.values()) {
        if (count > maxFreq) maxFreq = count;
    }

    let total = 0;
    for (const count of freq.values()) {
        if (count === maxFreq) total += count;
    }

    return total;
};