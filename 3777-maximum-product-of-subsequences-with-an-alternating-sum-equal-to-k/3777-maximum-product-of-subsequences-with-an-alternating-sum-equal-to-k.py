class Solution:
    def maxProduct(self, nums: List[int], k: int, limit: int) -> int:
        n = len(nums)
        ans = -1

        upper_bounds = [x for x in nums]
        lower_bounds = [x for x in nums]
        lower_bounds[-1] = 0
        for i in range(n - 2, -1, -1):
            upper_bounds[i] = max(upper_bounds[i] - lower_bounds[i + 1], upper_bounds[i], upper_bounds[i + 1])
            lower_bounds[i] = min(lower_bounds[i], lower_bounds[i] - upper_bounds[i + 1], lower_bounds[i + 1])

        @lru_cache(maxsize=1000000)
        def dp(idx, is_even, s, prod):
            nonlocal ans, upper_bounds, lower_bounds
            if idx >= n:
                return
            if prod == 0 and ans != -1:
                return
            if prod > limit and ans != -1:
                return
            if prod <= ans and prod * 2 > limit:
                return
            if is_even and s + upper_bounds[idx] < k:
                return
            elif (not is_even) and s - upper_bounds[idx] > k:
                return

            nxt_sum = s + nums[idx] if is_even else s - nums[idx]
            if nxt_sum == k and prod * nums[idx] <= limit:
                ans = max(ans, prod * nums[idx])
            if ans == -1 or nums[idx] != 0:
                dp(idx + 1, not is_even, nxt_sum, prod * nums[idx])
            dp(idx + 1, is_even, s, prod)

        dp(0, True, 0, 1)
        return ans