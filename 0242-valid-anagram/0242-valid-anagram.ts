function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sCounts = new Array(26).fill(0);
    const tCounts = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        sCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        tCounts[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < 26; i++) {
        if (sCounts[i] !== tCounts[i]) {
            return false;
        }
    }
    
    return true;
};