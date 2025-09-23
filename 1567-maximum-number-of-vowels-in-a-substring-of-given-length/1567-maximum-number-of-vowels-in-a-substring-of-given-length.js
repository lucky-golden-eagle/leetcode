/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a','e','i','o','u']);
    let count = 0, best = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (i >= k && vowels.has(s[i - k])) count--;
        if (i >= k - 1) best = Math.max(best, count);
    }
    return best;
};