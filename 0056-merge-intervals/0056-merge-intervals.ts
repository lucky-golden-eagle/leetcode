function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) {
        return intervals;
    }

    // Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals: number[][] = [];
    mergedIntervals.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // Check for overlap: current interval's start is less than or equal to last merged interval's end
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlap, merge by updating the end of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // No overlap, add the current interval as a new merged interval
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
};