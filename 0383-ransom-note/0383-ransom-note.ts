function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const magazineFreq = new Map<string, number>();
    for (const char of magazine) {
        magazineFreq.set(char, (magazineFreq.get(char) || 0) + 1);
    }
    
    for (const char of ransomNote) {
        if (magazineFreq.has(char) && magazineFreq.get(char) > 0) {
            magazineFreq.set(char, magazineFreq.get(char) - 1);
        } else {
            return false;
        }
    }
    
    return true;
};