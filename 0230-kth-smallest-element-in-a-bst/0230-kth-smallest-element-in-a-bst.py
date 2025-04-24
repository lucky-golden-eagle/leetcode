# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        """
        Finds the kth smallest value (1-indexed) in a Binary Search Tree.

        Args:
            root: The root node of the BST.
            k: The index (1-based) of the desired smallest value.

        Returns:
            The value of the kth smallest node.
        """
        stack = []
        current_node = root
        count = 0

        while current_node or stack:
            while current_node:
                stack.append(current_node)
                current_node = current_node.left

            node = stack.pop()

            count += 1
            if count == k:
                return node.val # Found the kth smallest element
            current_node = node.right

        return -1