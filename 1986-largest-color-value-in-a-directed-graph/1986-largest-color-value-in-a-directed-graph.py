class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        n = len(colors)
        graph = [[] for _ in range(n)]
        indegree = [0] * n
        for u, v in edges:
            graph[u].append(v)
            indegree[v] += 1

        count = [[0]*26 for _ in range(n)]
        q = deque(i for i in range(n) if indegree[i] == 0)
        visited = 0
        res = 0

        while q:
            u = q.popleft()
            visited += 1
            color_idx = ord(colors[u]) - ord('a')
            count[u][color_idx] += 1
            res = max(res, count[u][color_idx])

            for v in graph[u]:
                for i in range(26):
                    count[v][i] = max(count[v][i], count[u][i])
                indegree[v] -= 1
                if indegree[v] == 0:
                    q.append(v)

        return res if visited == n else -1