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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // delete this node
        if (root.left === null && root.right === null) return null;
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // two children: replace with inorder successor
        let succParent = root, succ = root.right;
        while (succ.left) {
        succParent = succ;
        succ = succ.left;
        }
        root.val = succ.val;
        // delete successor
        if (succParent.left === succ) succParent.left = deleteNode(succ, succ.val);
        else succParent.right = deleteNode(succ, succ.val);
    }
    return root;
};