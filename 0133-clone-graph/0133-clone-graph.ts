/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;
    const map = new Map<Node, Node>();

    function dfs(curr: Node): Node {
        if (map.has(curr)) return map.get(curr)!;
        const clone = new Node(curr.val);
        map.set(curr, clone);
        for (const neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }

    return dfs(node);
};