function hIndex(citations: number[]): number {
    const n = citations.length;
    const counts = new Array(n + 1).fill(0);
    for (const citation of citations) {
        if (citation >= n) {
            counts[n]++;
        } else {
            counts[citation]++;
        }
    }
    let papersWithAtLeastH = 0;
    for (let h = n; h >= 0; h--) {
        papersWithAtLeastH += counts[h];
        if (papersWithAtLeastH >= h) {
            return h;
        }
    }
    return 0;
};