/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) {
        return "";
    }

    let start = 0;
    let end = 0;

    const expandAroundCenter = (left, right) => {
        let L = left;
        let R = right;
        while (L >= 0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }
        return R - L - 1;
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i);
        let len2 = expandAroundCenter(i, i + 1);
        let len = Math.max(len1, len2);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};