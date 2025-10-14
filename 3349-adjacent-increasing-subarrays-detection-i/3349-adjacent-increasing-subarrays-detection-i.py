class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        inc = [1]*n
        for i in range(1, n):
            inc[i] = inc[i-1]+1 if nums[i-1] < nums[i] else 1
        for a in range(0, n - 2*k + 1):
            if inc[a + k - 1] >= k and inc[a + 2*k - 1] >= k:
                return True
        return False
