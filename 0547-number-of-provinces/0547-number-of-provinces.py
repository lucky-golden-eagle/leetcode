class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        parent = list(range(n))
        size = [1]*n
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        def union(a,b):
            ra, rb = find(a), find(b)
            if ra == rb: return
            if size[ra] < size[rb]: ra, rb = rb, ra
            parent[rb] = ra
            size[ra] += size[rb]
        for i in range(n):
            row = isConnected[i]
            for j in range(i+1, n):
                if row[j]: union(i,j)
        return sum(1 for i in range(n) if find(i) == i)