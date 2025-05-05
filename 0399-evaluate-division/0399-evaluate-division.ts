function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Map<string, Map<string, number>> = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());

        graph.get(a)!.set(b, val);
        graph.get(b)!.set(a, 1 / val);
    }

    function dfs(
        curr: string,
        target: string,
        visited: Set<string>
    ): number {
        if (!graph.has(curr) || !graph.has(target)) return -1.0;
        if (curr === target) return 1.0;

        visited.add(curr);
        for (const [neighbor, val] of graph.get(curr)!) {
            if (!visited.has(neighbor)) {
                const product = dfs(neighbor, target, visited);
                if (product !== -1.0) return val * product;
            }
        }
        return -1.0;
    }

    return queries.map(([a, b]) => dfs(a, b, new Set()));
};