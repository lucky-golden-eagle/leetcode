# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        """
        Finds the minimum absolute difference between the values of any two
        different nodes in a Binary Search Tree (BST).

        Args:
            root: The root node of the BST.

        Returns:
            The minimum absolute difference.
        """
        # Initialize minimum difference to positive infinity
        self.min_diff = float('inf')
        # Initialize the value of the previously visited node (in-order) to None
        self.prev_node_val = None

        def inorder(node: Optional[TreeNode]):
            """Performs in-order traversal and updates minimum difference."""
            if not node:
                return

            # 1. Traverse the left subtree
            inorder(node.left)

            # 2. Process the current node
            # If this is not the first node visited in the traversal
            if self.prev_node_val is not None:
                # Calculate the difference with the previous node's value
                # Since it's in-order traversal in a BST, node.val >= prev_node_val
                current_diff = node.val - self.prev_node_val
                # Update the overall minimum difference
                self.min_diff = min(self.min_diff, current_diff)

            # Update the previous node value for the next comparison
            self.prev_node_val = node.val

            # 3. Traverse the right subtree
            inorder(node.right)

        # Start the in-order traversal from the root
        inorder(root)

        # Return the minimum difference found
        # Cast to int if necessary, though differences should be integers
        return int(self.min_diff)