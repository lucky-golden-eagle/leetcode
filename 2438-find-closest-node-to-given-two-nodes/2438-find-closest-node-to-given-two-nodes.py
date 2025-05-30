class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        def get_distances(start):
            n = len(edges)
            dist = [-1] * n
            d = 0
            while start != -1 and dist[start] == -1:
                dist[start] = d
                d += 1
                start = edges[start]
            return dist

        dist1 = get_distances(node1)
        dist2 = get_distances(node2)
        
        min_dist = float('inf')
        ans = -1
        for i in range(len(edges)):
            if dist1[i] != -1 and dist2[i] != -1:
                max_dist = max(dist1[i], dist2[i])
                if max_dist < min_dist or (max_dist == min_dist and i < ans):
                    min_dist = max_dist
                    ans = i
        return ans