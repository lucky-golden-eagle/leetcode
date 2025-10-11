class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        freq = Counter(power)
        keys = sorted(freq)
        w = [k * freq[k] for k in keys]  # bucket weights

        dp = [0] * len(keys)
        # For each keys[i], find last index p with keys[p] <= keys[i] - 3
        # Use bisect to keep it simple
        for i, k in enumerate(keys):
            # index of first key >= k-2  -> subtract 1 gives last <= k-3
            p = bisect_right(keys, k - 3) - 1
            take = w[i] + (dp[p] if p >= 0 else 0)
            skip = dp[i-1] if i > 0 else 0
            dp[i] = max(skip, take)

        return dp[-1] if dp else 0