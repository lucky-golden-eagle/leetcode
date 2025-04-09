class Solution:
    def findMaxSubarrayRecursive(self, nums: List[int], low: int, high: int) -> int:
        if low == high:
            return nums[low]

        mid = (low + high) // 2

        left_max = self.findMaxSubarrayRecursive(nums, low, mid)
        right_max = self.findMaxSubarrayRecursive(nums, mid + 1, high)

        left_border_sum = -math.inf
        current_sum = 0
        for i in range(mid, low - 1, -1):
            current_sum += nums[i]
            left_border_sum = max(left_border_sum, current_sum)

        right_border_sum = -math.inf
        current_sum = 0
        for i in range(mid + 1, high + 1):
            current_sum += nums[i]
            right_border_sum = max(right_border_sum, current_sum)
            
        cross_max = left_border_sum + right_border_sum

        return max(left_max, right_max, cross_max)

    def maxSubArray(self, nums: List[int]) -> int:
        # Constraints state nums.length >= 1, so no need to check for empty
        return self.findMaxSubarrayRecursive(nums, 0, len(nums) - 1)
        