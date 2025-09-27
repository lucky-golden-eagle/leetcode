/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const n = points.length;
    let best = 0;

    for (let i = 0; i < n; i++) {
        const [x1, y1] = points[i];
        for (let j = i + 1; j < n; j++) {
        const [x2, y2] = points[j];
        for (let k = j + 1; k < n; k++) {
            const [x3, y3] = points[k];
            const area = Math.abs(
            x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2)
            ) / 2;
            if (area > best) best = area;
        }
        }
    }
    return best;
};