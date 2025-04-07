/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    // parent[i]: Stores the parent of node i in the DSU structure.
    const parent = Array(n).fill(0).map((_, i) => i);
    // rank[i]: Stores the rank (used for union-by-rank optimization).
    const rank = Array(n).fill(0);
    // bitwise[i]: Stores the cumulative bitwise AND of edge weights for the
    //             connected component whose root is i. Initialized to -1 (all bits set),
    //             which is the identity element for bitwise AND.
    const bitwise = Array(n).fill(-1);

    // Finds the root of the set containing node i, with path compression.
    const find = (i) => {
        if (parent[i] === i) {
            return i;
        }
        // Path compression: Point node directly to the root.
        return parent[i] = find(parent[i]);
    };

    // Unites the sets containing nodes i and j, using union-by-rank.
    // Updates the bitwise AND value for the resulting component.
    const union = (i, j, weight) => {
        const rootI = find(i);
        const rootJ = find(j);

        if (rootI === rootJ) {
            // Nodes are already in the same component.
            // Update the component's bitwise value by ANDing with the new edge weight.
            bitwise[rootI] &= weight;
        } else {
            // Nodes are in different components, merge them.
            // Calculate the bitwise AND for the merged component.
            // This combines the existing AND values of both components and the new edge weight.
            // Works correctly even if initial bitwise values are -1, because (x & -1) = x.
            const mergedBitwiseVal = bitwise[rootI] & bitwise[rootJ] & weight;

            // Union by rank: Attach the smaller rank tree under the larger rank tree.
            if (rank[rootI] < rank[rootJ]) {
                parent[rootI] = rootJ;
                // Assign the merged bitwise value to the new root (rootJ).
                bitwise[rootJ] = mergedBitwiseVal;
            } else if (rank[rootI] > rank[rootJ]) {
                parent[rootJ] = rootI;
                // Assign the merged bitwise value to the new root (rootI).
                bitwise[rootI] = mergedBitwiseVal;
            } else {
                // Ranks are equal: Choose one as the new root (rootI) and increment its rank.
                parent[rootJ] = rootI;
                // Assign the merged bitwise value to the new root (rootI).
                bitwise[rootI] = mergedBitwiseVal;
                rank[rootI]++;
            }
        }
    };

    // --- Main Logic ---

    // 1. Build the DSU structure by processing all edges.
    for (const [u, v, weight] of edges) {
        union(u, v, weight);
    }

    // 2. Process the queries.
    const results = [];
    for (const [startNode, endNode] of query) {
        // Trivial case: cost is 0 if start and end are the same.
        if (startNode === endNode) {
            results.push(0);
            continue;
        }

        // Find the roots of the components containing startNode and endNode.
        const rootStart = find(startNode);
        const rootEnd = find(endNode);

        // If the roots are the same, the nodes are connected.
        // The result is the bitwise AND value stored at the root.
        if (rootStart === rootEnd) {
            results.push(bitwise[rootStart]);
        } else {
            // If the roots are different, the nodes are not connected.
            results.push(-1);
        }
    }

    return results;
};