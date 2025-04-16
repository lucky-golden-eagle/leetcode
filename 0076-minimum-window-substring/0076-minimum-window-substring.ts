function minWindow(s: string, t: string): string {
    if (t.length === 0) {
        return "";
    }

    const tFreq = new Map<string, number>();
    for (const char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    const requiredUniqueChars = tFreq.size;
    let left = 0;
    let right = 0;
    let minWindowLength = Infinity;
    let minWindowStart = 0;
    let metUniqueChars = 0;
    const windowFreq = new Map<string, number>();

    while (right < s.length) {
        const char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            metUniqueChars++;
        }

        while (left <= right && metUniqueChars === requiredUniqueChars) {
            const currentWindowLength = right - left + 1;
            if (currentWindowLength < minWindowLength) {
                minWindowLength = currentWindowLength;
                minWindowStart = left;
            }

            const charLeft = s[left];
            windowFreq.set(charLeft, windowFreq.get(charLeft)! - 1);
            if (tFreq.has(charLeft) && windowFreq.get(charLeft)! < tFreq.get(charLeft)!) {
                metUniqueChars--;
            }
            left++;
        }

        right++;
    }

    return minWindowLength === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minWindowLength);
};