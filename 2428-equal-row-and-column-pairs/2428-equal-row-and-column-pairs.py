class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n = len(grid)
        row_counts = Counter(tuple(row) for row in grid)
        ans = 0
        for c in range(n):
            col = tuple(grid[r][c] for r in range(n))
            ans += row_counts.get(col, 0)
        return ans