class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        n, m = len(heights), len(heights[0])
        dirs = [(-1,0),(1,0),(0,1),(0,-1)]

        def bfs(starts):
            vis = [[False]*m for _ in range(n)]
            q = deque(starts)
            for x, y in starts:
                vis[x][y] = True

            while q:
                x, y = q.popleft()
                for dx, dy in dirs:
                    nx, ny = x+dx, y+dy
                    if 0 <= nx < n and 0 <= ny < m and not vis[nx][ny] and heights[nx][ny] >= heights[x][y]:
                        vis[nx][ny] = True
                        q.append((nx, ny))
            return vis

        pacific = bfs([(i,0) for i in range(n)] + [(0,j) for j in range(m)])
        atlantic = bfs([(i,m-1) for i in range(n)] + [(n-1,j) for j in range(m)])

        return [[i,j] for i in range(n) for j in range(m) if pacific[i][j] and atlantic[i][j]]