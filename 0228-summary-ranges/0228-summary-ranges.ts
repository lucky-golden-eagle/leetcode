function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    const n = nums.length;

    if (n === 0) {
        return result;
    }

    let i = 0;
    while (i < n) {
        const start = nums[i];
        let j = i;
        while (j + 1 < n && nums[j + 1] === nums[j] + 1) {
            j++;
        }
        const end = nums[j];

        if (start === end) {
            result.push(start.toString());
        } else {
            result.push(`${start}->${end}`);
        }

        i = j + 1;
    }

    return result;
};