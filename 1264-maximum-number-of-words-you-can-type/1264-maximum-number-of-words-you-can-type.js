/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    if (brokenLetters.length === 0) return text.split(" ").length;

    const broken = new Set(brokenLetters);
    let count = 0;

    for (const word of text.split(" ")) {
        let ok = true;
        for (const ch of word) {
        if (broken.has(ch)) {
            ok = false;
            break;
        }
        }
        if (ok) count++;
    }
    return count;
};