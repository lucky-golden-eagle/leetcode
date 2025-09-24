function largestAltitude(gain: number[]): number {
    let maxAlt = 0;   // highest altitude seen so far (starts at 0)
    let curr = 0;     // current altitude

    for (const g of gain) {
        curr += g;          // move to next point
        if (curr > maxAlt) maxAlt = curr; // track peak
    }
    return maxAlt;
};