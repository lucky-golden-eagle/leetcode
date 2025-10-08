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
var longestZigZag = function(root) {
    let ans = 0;

    function dfs(node) {
        if (!node) return [-1, -1]; // [go_left, go_right]
        const [lL, lR] = dfs(node.left);
        const [rL, rR] = dfs(node.right);
        const goLeft = 1 + lR;   // next move left => use child's goRight
        const goRight = 1 + rL;  // next move right => use child's goLeft
        ans = Math.max(ans, goLeft, goRight);
        return [goLeft, goRight];
    }

    dfs(root);
    return ans;
};