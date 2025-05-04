function numEquivDominoPairs(dominoes: number[][]): number {
    const map = new Map<string, number>();
    let count = 0;

    for (const [a, b] of dominoes) {
        const key = a < b ? `${a},${b}` : `${b},${a}`;
        const val = map.get(key) || 0;
        count += val;
        map.set(key, val + 1);
    }

    return count;
};