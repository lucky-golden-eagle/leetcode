/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    // Initialize DSU arrays
    // parent[i] = i initially
    const parent = Array(n).fill(0).map((_, i) => i);
    // rank helps optimize union operations
    const rank = Array(n).fill(0);
    // bitwise[i] stores the bitwise AND of edge weights in the component rooted at i.
    // -1 represents all bits set (111...1), the identity for bitwise AND.
    const bitwise = Array(n).fill(-1);

    // Find function with path compression
    const find = (i) => {
        if (parent[i] === i) {
            return i;
        }
        // Path compression: Set parent directly to the root
        return parent[i] = find(parent[i]);
    };

    // Union function with union-by-rank and bitwise AND calculation
    const union = (i, j, weight) => {
        const rootI = find(i);
        const rootJ = find(j);

        if (rootI === rootJ) {
            // Edge connects two nodes already in the same component.
            // Update the component's bitwise AND value.
            bitwise[rootI] &= weight;
        } else {
            // Merge two different components.
            // Calculate the new bitwise AND value for the merged component.
            // This simplified calculation works because (x & -1) = x.
            const bitwiseVal = bitwise[rootI] & bitwise[rootJ] & weight;

            // Union by rank
            if (rank[rootI] < rank[rootJ]) {
                parent[rootI] = rootJ;
                // Assign the calculated bitwise value to the new root
                bitwise[rootJ] = bitwiseVal;
            } else if (rank[rootI] > rank[rootJ]) {
                parent[rootJ] = rootI;
                // Assign the calculated bitwise value to the new root
                bitwise[rootI] = bitwiseVal;
            } else {
                // Ranks are equal, choose one as parent and increment its rank
                parent[rootJ] = rootI;
                // Assign the calculated bitwise value to the new root
                bitwise[rootI] = bitwiseVal;
                rank[rootI]++;
            }
        }
        // The return value true/false wasn't used, so removed for clarity/minor optimization.
    };

    // Process all edges to build the DSU structure and calculate bitwise ANDs
    for (const [u, v, weight] of edges) {
        union(u, v, weight);
    }

    // Process all queries
    const result = [];
    for (const [start, end] of query) {
        // Handle the trivial case where start and end are the same node
        if (start === end) {
            result.push(0);
            continue;
        }

        const rootStart = find(start);
        const rootEnd = find(end);

        // If roots are the same, they are connected; return the component's bitwise value
        // Otherwise, they are not connected, return -1
        result.push(rootStart === rootEnd ? bitwise[rootStart] : -1);
    }

    return result;
};