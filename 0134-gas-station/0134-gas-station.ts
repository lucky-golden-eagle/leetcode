function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    if (totalGas < totalCost) {
        return -1;
    }

    let currentGas = 0;
    let startStation = 0;

    for (let i = 0; i < n; i++) {
        currentGas += gas[i] - cost[i];
        if (currentGas < 0) {
            startStation = i + 1;
            currentGas = 0;
        }
    }

    return startStation;
};