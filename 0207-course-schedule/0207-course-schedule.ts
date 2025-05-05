function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: Map<number, number[]> = new Map();
    const visited: number[] = new Array(numCourses).fill(0);

    for (const [course, pre] of prerequisites) {
        if (!graph.has(pre)) graph.set(pre, []);
        graph.get(pre)!.push(course);
    }

    function hasCycle(course: number): boolean {
        if (visited[course] === 1) return true;
        if (visited[course] === 2) return false;

        visited[course] = 1;
        for (const neighbor of graph.get(course) || []) {
            if (hasCycle(neighbor)) return true;
        }
        visited[course] = 2;

        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
};