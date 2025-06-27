/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    const isRepeatedKTimes = (source, pattern, k) => {
        let pat = [...pattern], sourceLen = source.length, patLen = pat.length, idx = 0;
        while (k-- > 0) {
            let match = 0;
            while (idx < sourceLen && match < patLen) {
                if (source[idx] === pat[match]) match++;
                idx++;
            }
            if (match !== patLen) return false;
        }
        return true;
    };

    const chars = [...s], len = chars.length;
    const freq = new Array(26).fill(0);
    for (let i = 0; i < len; i++) freq[chars[i].charCodeAt(0) - 97]++;

    const candidates = Array.from({ length: 8 }, () => []);
    let result = "";

    for (let i = 0; i < 26; i++) {
        if (freq[i] >= k) {
            const ch = String.fromCharCode(97 + i);
            result = ch;
            candidates[1].push(ch);
        }
    }

    for (let length = 2; length < 8; length++) {
        for (let prefix of candidates[length - 1]) {
            for (let suffix of candidates[1]) {
                const combo = prefix + suffix;
                if (isRepeatedKTimes(chars, combo, k)) {
                    result = combo;
                    candidates[length].push(combo);
                }
            }
        }
    }

    return result;
};