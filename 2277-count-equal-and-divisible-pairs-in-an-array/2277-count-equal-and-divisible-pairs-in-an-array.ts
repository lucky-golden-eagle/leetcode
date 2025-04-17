function countPairs(nums: number[], k: number): number {
    let count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                if ((i * j) % k === 0) {
                    count++;
                }
            }
        }
    }
    return count;
};