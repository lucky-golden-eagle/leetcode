function numIslands(grid: string[][]): number {
    const m = grid.length;
    if (m === 0) {
        return 0;
    }

    const n = grid[0].length;
    if (n === 0) {
        return 0;
    }

    let numberOfIslands =0;

    const dfs = (row: number, col: number): void => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands++;
                dfs(i,j);
            }
        }
    }

    return numberOfIslands;
};