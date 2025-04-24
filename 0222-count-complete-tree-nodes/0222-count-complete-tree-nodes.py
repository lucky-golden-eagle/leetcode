# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None:
            return 0
        if root.right == None and root.left == None:
            return 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)