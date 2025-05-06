function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    const dfs = (start: number) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            dfs(i + 1);
            path.pop();
        }
    };

    dfs(1);
    return res;
};