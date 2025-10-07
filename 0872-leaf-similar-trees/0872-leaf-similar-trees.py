# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def leaves(root):
            out = []
            def dfs(node):
                if not node: return
                if not node.left and not node.right:
                    out.append(node.val)
                    return
                dfs(node.left)
                dfs(node.right)
            dfs(root)
            return out

        return leaves(root1) == leaves(root2)