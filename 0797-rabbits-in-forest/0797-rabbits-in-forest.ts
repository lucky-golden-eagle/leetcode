function numRabbits(answers: number[]): number {
    const answerCounts = new Map<number, number>();
    for (const answer of answers) {
        answerCounts.set(answer, (answerCounts.get(answer) || 0) + 1);
    }

    let minTotalRabbits = 0;
    for (const [answer, count] of answerCounts.entries()) {
        const groupSize = answer + 1;
        const numGroups = Math.ceil(count / groupSize);
        minTotalRabbits += numGroups * groupSize;
    }

    return minTotalRabbits;
};