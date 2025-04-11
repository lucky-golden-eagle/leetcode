function mostPoints(questions: number[][]): number {
    const n = questions.length;
    const dp: number[] = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const [points, brainpower] = questions[i];
        const nextQuestionIndex = i + brainpower + 1;
        const solvePoints = points + (nextQuestionIndex < n ? dp[nextQuestionIndex] : 0);
        const skipPoints = dp[i + 1];
        dp[i] = Math.max(solvePoints, skipPoints);
    }

    return dp[0];
};