function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const lastSeenIndex = new Map<number, number>();
    for (let j = 0; j < nums.length; j++) {
        const currentNumber = nums[j];
        if (lastSeenIndex.has(currentNumber)) {
            const i = lastSeenIndex.get(currentNumber)!;
            if (Math.abs(i - j) <= k) {
                return true;
            }
        }
        lastSeenIndex.set(currentNumber, j);
    }
    return false;
};