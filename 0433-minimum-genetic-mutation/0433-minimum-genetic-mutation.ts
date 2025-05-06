function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const bankSet = new Set(bank);
    if (!bankSet.has(endGene)) return -1;

    const queue: [string, number][] = [[startGene, 0]];
    const chars = ['A', 'C', 'G', 'T'];
    const visited = new Set<string>();
    visited.add(startGene);

    while (queue.length) {
        const [gene, steps] = queue.shift()!;
        if (gene === endGene) return steps;

        for (let i = 0; i < 8; i++) {
            for (const ch of chars) {
                if (ch === gene[i]) continue;
                const mutated = gene.slice(0, i) + ch + gene.slice(i + 1);
                if (bankSet.has(mutated) && !visited.has(mutated)) {
                    visited.add(mutated);
                    queue.push([mutated, steps + 1]);
                }
            }
        }
    }

    return -1;
};