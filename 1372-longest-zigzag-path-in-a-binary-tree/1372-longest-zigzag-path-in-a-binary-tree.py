# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        import sys
        sys.setrecursionlimit(200000)  # tree can be large/skewed

        ans = 0

        def dfs(node):
            nonlocal ans
            if not node:
                # return (-1, -1) so leaf computes to 0-length (edges) after +1
                return -1, -1

            leftL, leftR = dfs(node.left)
            rightL, rightR = dfs(node.right)

            go_left  = 1 + leftR   # next is left, so use child's "go right"
            go_right = 1 + rightL  # next is right, so use child's "go left"

            ans = max(ans, go_left, go_right)
            return go_left, go_right

        dfs(root)
        return ans