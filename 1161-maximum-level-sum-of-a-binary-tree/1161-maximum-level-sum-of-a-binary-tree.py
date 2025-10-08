# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        q = deque([root])
        level, best_level, best_sum = 1, 1, -inf

        while q:
            s = 0
            for _ in range(len(q)):
                node = q.popleft()
                s += node.val
                if node.left:  q.append(node.left)
                if node.right: q.append(node.right)

            if s > best_sum:
                best_sum, best_level = s, level
            level += 1

        return best_level