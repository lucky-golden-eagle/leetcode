function isValidSudoku(board: string[][]): boolean {
    const n = 9;

    // Check rows
    for (let i = 0; i < n; i++) {
        const seen = new Set<string>();
        for (let j = 0; j < n; j++) {
            const cell = board[i][j];
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
    }

    // Check columns
    for (let j = 0; j < n; j++) {
        const seen = new Set<string>();
        for (let i = 0; i < n; i++) {
            const cell = board[i][j];
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
    }

    // Check 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const seen = new Set<string>();
            for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
                for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
                    const cell = board[i][j];
                    if (cell !== '.') {
                        if (seen.has(cell)) {
                            return false;
                        }
                        seen.add(cell);
                    }
                }
            }
        }
    }

    return true;
};