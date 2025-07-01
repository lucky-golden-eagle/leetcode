/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let res = 1;
    let i = 0;
    while (i < word.length) {
        let j = i;
        while (j + 1 < word.length && word[j + 1] === word[i]) j++;
        if (j > i) res += j - i;
        i = j + 1;
    }
    return res;
};