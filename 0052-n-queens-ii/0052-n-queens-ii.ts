function totalNQueens(n: number): number {
    let count = 0;
    const cols = new Set<number>();
    const diag1 = new Set<number>();
    const diag2 = new Set<number>();

    const dfs = (row: number) => {
        if (row === n) {
            count++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            dfs(row + 1);
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };

    dfs(0);
    return count;
};