function countSubarrays(nums: number[]): number {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i <= n - 3; i++) {
        const first = nums[i];
        const middle = nums[i + 1];
        const third = nums[i + 2];
        if ((first + third) * 2 === middle) {
            count++;
        }
    }

    return count;
};