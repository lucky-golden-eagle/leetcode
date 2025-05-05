function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: Map<number, number[]> = new Map();
    const inDegree: number[] = new Array(numCourses).fill(0);
    const order: number[] = [];

    for (const [course, pre] of prerequisites) {
        if (!graph.has(pre)) graph.set(pre, []);
        graph.get(pre)!.push(course);
        inDegree[course]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
        const curr = queue.shift()!;
        order.push(curr);
        for (const neighbor of graph.get(curr) || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return order.length === numCourses ? order : [];
};