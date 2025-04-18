function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);

    let arrowCount = 1;
    let currentArrowEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [balloonStart, balloonEnd] = points[i];

        if (balloonStart > currentArrowEnd) {
            arrowCount++;
            currentArrowEnd = balloonEnd;
        }
    }

    return arrowCount;
};