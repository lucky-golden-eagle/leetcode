function isHappy(n: number): boolean {
    const seenNumbers = new Set<number>();
    while (n !== 1) {
        if (seenNumbers.has(n)) {
            return false;
        }
        seenNumbers.add(n);
        let sumOfSquares = 0;
        let tempN = n;
        while (tempN > 0) {
            const digit = tempN % 10;
            sumOfSquares += digit * digit;
            tempN = Math.floor(tempN / 10);
        }
        n = sumOfSquares;
    }
    return true;
};