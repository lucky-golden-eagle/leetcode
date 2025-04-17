function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    const patternToWord = new Map<string, string>();
    const wordToPattern = new Map<string, string>();
    
    for (let i = 0; i < pattern.length; i++) {
        const charPattern = pattern[i];
        const wordS = words[i];
        
        if (patternToWord.has(charPattern)) {
            if (patternToWord.get(charPattern) !== wordS) {
                return false;
            }
        } else {
            if (wordToPattern.has(wordS)) {
                if (wordToPattern.get(wordS) !== charPattern) {
                    return false;
                }
            } else {
                patternToWord.set(charPattern, wordS);
                wordToPattern.set(wordS, charPattern);
            }
        }
    }
    
    return true;
};