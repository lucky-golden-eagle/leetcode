/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
     if (!s || !words || words.length === 0 || s.length === 0) {
        return [];
    }

    const numWords = words.length;
    const wordLength = words[0].length; // All words have the same length
    const totalLength = numWords * wordLength;
    const sLen = s.length;

    if (totalLength > sLen) {
        return []; // Concatenated string cannot be longer than s
    }

    const wordFreqMap = new Map();
    for (const word of words) {
        wordFreqMap.set(word, (wordFreqMap.get(word) || 0) + 1);
    }

    const resultIndices = [];

    for (let i = 0; i < wordLength; i++) {
        let left = i; // Left pointer of the sliding window
        let right = i; // Right pointer of the sliding window (start of the next word to check)
        let wordsFound = 0; // Count of words successfully matched in the current window
        const currentFreqMap = new Map(); // Frequency map for the current window

        while (right + wordLength <= sLen) {
            const currentWord = s.substring(right, right + wordLength);
            right += wordLength; // Move the right boundary

            if (wordFreqMap.has(currentWord)) {
                currentFreqMap.set(currentWord, (currentFreqMap.get(currentWord) || 0) + 1);
                wordsFound++;

                while (currentFreqMap.get(currentWord) > wordFreqMap.get(currentWord)) {
                    const wordToRemove = s.substring(left, left + wordLength);
                    currentFreqMap.set(wordToRemove, currentFreqMap.get(wordToRemove) - 1);
                    wordsFound--;
                    left += wordLength; // Slide the left boundary
                }

                if (wordsFound === numWords) {
                    resultIndices.push(left);

                    const wordToRemove = s.substring(left, left + wordLength);
                    currentFreqMap.set(wordToRemove, currentFreqMap.get(wordToRemove) - 1);
                    wordsFound--;
                    left += wordLength;
                }
            } else {
                currentFreqMap.clear();
                wordsFound = 0;
                left = right; // Start the next potential window from the current 'right'
            }
        }
    }

    return resultIndices;
};