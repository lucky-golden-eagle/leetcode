class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        q = deque()
        fresh = 0

        for r in range(m):
            for c in range(n):
                if grid[r][c] == 2:
                    q.append((r, c, 0))
                elif grid[r][c] == 1:
                    fresh += 1

        if fresh == 0:
            return 0

        last_minute = 0
        for_dr = ((1,0),(-1,0),(0,1),(0,-1))

        while q:
            r, c, t = q.popleft()
            for dr, dc in for_dr:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    last_minute = t + 1
                    q.append((nr, nc, t + 1))

        return -1 if fresh else last_minute