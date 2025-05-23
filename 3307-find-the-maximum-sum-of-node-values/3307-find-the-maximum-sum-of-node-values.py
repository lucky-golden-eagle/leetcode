class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        base = sum(nums)
        diffs = [((num ^ k) - num) for num in nums]
        diffs.sort(reverse=True)
        max_sum = base
        cur_sum = base
        for i in range(1, len(diffs) + 1, 2):
            if i < len(diffs) and diffs[i - 1] + diffs[i] > 0:
                cur_sum += diffs[i - 1] + diffs[i]
                max_sum = max(max_sum, cur_sum)
            else:
                break
        return max_sum