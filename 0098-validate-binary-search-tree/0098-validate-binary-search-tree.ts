/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, minAllowed: number, maxAllowed: number): boolean {
    if (node === null) {
            return true;
        }

        if (node.val <= minAllowed || node.val >= maxAllowed) {
            return false;
        }

        return validate(node.left, minAllowed, node.val) &&
               validate(node.right, node.val, maxAllowed);
    }

    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};