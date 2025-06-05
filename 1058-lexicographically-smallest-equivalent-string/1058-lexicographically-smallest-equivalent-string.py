class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        parent = list(range(26))  # 'a' to 'z' mapped to 0–25

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return
            # Always attach the larger to the smaller to keep the smallest as representative
            if px < py:
                parent[py] = px
            else:
                parent[px] = py

        # Build equivalence classes
        for ch1, ch2 in zip(s1, s2):
            union(ord(ch1) - ord('a'), ord(ch2) - ord('a'))

        # Transform baseStr using the smallest equivalent character
        result = []
        for ch in baseStr:
            smallest_equiv = chr(find(ord(ch) - ord('a')) + ord('a'))
            result.append(smallest_equiv)

        return ''.join(result)