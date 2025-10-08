/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    if (!root) return 0;
    let count = 0;
    const stack = [[root, -Infinity]]; // [node, maxSoFar]
    while (stack.length) {
        const [node, mx] = stack.pop();
        if (node.val >= mx) count++;
        const newMx = Math.max(mx, node.val);
        if (node.right) stack.push([node.right, newMx]);
        if (node.left)  stack.push([node.left, newMx]);
    }
    return count;
};