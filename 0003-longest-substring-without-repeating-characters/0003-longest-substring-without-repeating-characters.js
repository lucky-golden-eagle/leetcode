/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let start = 0;
    let charMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s.charAt(end);
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
        start = charMap.get(currentChar) + 1;
        }
        charMap.set(currentChar, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};