# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        """
        Performs zigzag level order traversal of a binary tree.

        Args:
            root: The root node of the binary tree.

        Returns:
            A list of lists representing the zigzag level order traversal.
            Levels alternate between left-to-right and right-to-left order.
        """
        if not root:
            return []

        result = []
        queue = collections.deque([root])
        left_to_right = True  # Flag to indicate traversal direction

        while queue:
            level_size = len(queue)
            # Use deque for efficient append/appendleft
            current_level_nodes = collections.deque()

            for _ in range(level_size):
                node = queue.popleft()

                if left_to_right:
                    current_level_nodes.append(node.val)
                else:
                    current_level_nodes.appendleft(node.val) # Add to front for right-to-left

                # Add children to the main queue for the next level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            # Append the collected nodes for the current level (as a list)
            result.append(list(current_level_nodes))
            # Flip the direction for the next level
            left_to_right = not left_to_right

        return result