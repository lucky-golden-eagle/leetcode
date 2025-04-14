function candy(ratings: number[]): number {
    const n = ratings.length;
    if (n === 0) {
        return 0;
    }

    const candies: number[] = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    let totalCandies = 0;
    for (const candyCount of candies) {
        totalCandies += candyCount;
    }

    return totalCandies;
};