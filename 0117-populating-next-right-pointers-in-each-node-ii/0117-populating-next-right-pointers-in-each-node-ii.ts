/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function connect(root: _Node | null): _Node | null {
    if (!root) {
        return null;
    }
    const q: Node[] = [root];
    while (q.length) {
        const nq: Node[] = [];
        let p: Node | null = null;
        for (const node of q) {
            if (p) {
                p.next = node;
            }
            p = node;
            const { left, right } = node;
            left && nq.push(left);
            right && nq.push(right);
        }
        q.splice(0, q.length, ...nq);
    }
    return root;
};