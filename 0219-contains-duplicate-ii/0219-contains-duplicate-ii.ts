function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const indexedNums: [number, number][] = [];
    for (let i = 0; i < nums.length; i++) {
        indexedNums.push([nums[i], i]);
    }
    
    indexedNums.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    
    for (let i = 0; i < indexedNums.length - 1; i++) {
        if (indexedNums[i][0] === indexedNums[i + 1][0]) {
            const index1 = indexedNums[i][1];
            const index2 = indexedNums[i + 1][1];
            if (Math.abs(index1 - index2) <= k) {
                return true;
            }
        }
    }
    
    return false;
};