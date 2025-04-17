function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let maxLength = 0;

    for (const n of numSet) {
        if (!numSet.has(n - 1)) {
            let currentLength = 1;
            let currentNumber = n;
            while (numSet.has(currentNumber + 1)) {
                currentNumber++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};