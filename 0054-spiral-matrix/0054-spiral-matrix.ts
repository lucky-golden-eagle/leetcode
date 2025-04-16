function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    const m = matrix.length;
    if (m === 0) {
        return result;
    }
    const n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    let direction = 0; // 0: right, 1: down, 2: left, 3: up

    while (top <= bottom && left <= right) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
        } else if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
        } else if (direction === 2) {
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
            }
        } else if (direction === 3) {
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
            }
        }
        direction = (direction + 1) % 4;
    }

    return result;
};