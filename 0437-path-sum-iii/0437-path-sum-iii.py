# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        prefix = {0: 1}  # empty path sum
        def dfs(node, cur):
            if not node: return 0
            cur += node.val
            # paths ending here with sum targetSum
            res = prefix.get(cur - targetSum, 0)
            prefix[cur] = prefix.get(cur, 0) + 1
            res += dfs(node.left, cur) + dfs(node.right, cur)
            prefix[cur] -= 1  # backtrack
            return res
        return dfs(root, 0)