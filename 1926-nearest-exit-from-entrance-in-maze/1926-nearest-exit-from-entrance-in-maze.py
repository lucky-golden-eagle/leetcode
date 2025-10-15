class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        m, n = len(maze), len(maze[0])
        sr, sc = entrance

        q = deque()
        q.append((sr, sc, 0))
        maze[sr][sc] = '+'

        dirs = [(1,0), (-1,0), (0,1), (0,-1)]

        while q:
            r, c, d = q.popleft()

            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and maze[nr][nc] == '.':
                    # If it's a border cell and not the entrance (already marked),
                    # it's an exit — return steps to reach it.
                    if nr == 0 or nr == m - 1 or nc == 0 or nc == n - 1:
                        return d + 1
                    # mark visited and enqueue
                    maze[nr][nc] = '+'
                    q.append((nr, nc, d + 1))

        return -1