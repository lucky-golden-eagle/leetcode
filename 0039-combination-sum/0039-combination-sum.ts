function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    const dfs = (start: number, sum: number) => {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(i, sum + candidates[i]);
            path.pop();
        }
    };

    dfs(0, 0);
    return res;
};