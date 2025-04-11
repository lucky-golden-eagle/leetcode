function subsetXORSum(nums: number[]): number {
    let totalSumOfXORTotals = 0;
    const n = nums.length;

    for (let i = 0; i < (1 << n); i++) {
        let currentXORTotal = 0;
        const currentSubset: number[] = [];

        for (let j = 0; j < n; j++) {
            if ((i >> j) & 1) {
                currentSubset.push(nums[j]);
                currentXORTotal ^= nums[j];
            }
        }
        totalSumOfXORTotals += currentXORTotal;
    }

    return totalSumOfXORTotals;
};