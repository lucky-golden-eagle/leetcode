class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:
        n = len(rains)
        ans = [-1] * n

        dry_days = []
        last = {}

        for i, lake in enumerate(rains):
            if lake == 0:
                ans[i] = 1
                insort(dry_days, i)
                continue

            if lake in last:
                jpos = bisect_right(dry_days, last[lake])
                if jpos == len(dry_days):
                    return []
                j = dry_days.pop(jpos)
                ans[j] = lake
            last[lake] = i
            ans[i] = -1

        return ans
