function minReorder(n: number, connections: number[][]): number {
    const directGraph = new Map<number, Set<number>>();
    const undirectGraph = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {
        directGraph.set(i, new Set);
        undirectGraph.set(i, []);
    }

    for (let i = 0; i < n - 1; i++) {
        const [a, b] = connections[i]; 

        undirectGraph.get(a).push(b);
        undirectGraph.get(b).push(a);

        directGraph.get(a).add(b);
    }

    const visited = new Set;

    const dfs = (a: number) => {
        let count = 0;
        visited.add(a);

        for (const b of undirectGraph.get(a)) {
            if (visited.has(b)) {
                continue;
            }

            if (!directGraph.get(b).has(a)) {
                count += 1;
            }
            
            count += dfs(b);
        }

        return count;
    }
 
    return dfs(0);
};