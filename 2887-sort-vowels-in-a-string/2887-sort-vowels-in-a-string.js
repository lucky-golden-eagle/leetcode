/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const isVowel = c => 'aeiouAEIOU'.includes(c);
    const chars = s.split('');
    const vowels = [];

    for (const c of chars) if (isVowel(c)) vowels.push(c);
    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    let k = 0;
    for (let i = 0; i < chars.length; i++) {
        if (isVowel(chars[i])) chars[i] = vowels[k++];
    }
    return chars.join('');
};