class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = defaultdict(dict)
        # Build the graph
        for i,equ in enumerate(equations):
            a, b = equ
            graph[a][b] =  values[i]
            graph[b][a] = 1/values[i]
        
        def dfs(start,end,visited):
            if start not in graph or end not in graph: # single answer cannot be determined, return -1.0.
                return -1.0
            if start == end:  
                return 1.0
            visited.add(start) # to avoid duplicates
            # dict look like {a:{b:val,c:val},x:{y:val,z:val}} so when we loop with items() it returns val dict one by one
            for neighbor, val in graph[start].items():
                if neighbor not in visited:
                    res = dfs(neighbor, end, visited) 
                    if res != -1.0: # if any one neighbor variable can't determine then return -1.0
                        return res * val
            return -1.0

        return [dfs(a, b, set()) for a, b in queries]