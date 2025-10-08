class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        potions.sort()
        m = len(potions)
        ans = []
        for s in spells:
            if s == 0:                      # (not needed per constraints, but safe)
                ans.append(0)
                continue
            need = (success + s - 1) // s   # ceil(success / s) without floats
            k = bisect_left(potions, need)
            ans.append(m - k)
        return ans