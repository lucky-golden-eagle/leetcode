function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let currentSum = 0;

    while (end < nums.length) {
        currentSum += nums[end];

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }

        end++;
    }

    return minLength === Infinity ? 0 : minLength;
};