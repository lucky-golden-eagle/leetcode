class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        answer, temp_sum = nums[0], nums[0]
        for i in range(1, len(nums)):
            temp_sum = max(temp_sum + nums[i], nums[i])
            if temp_sum > answer:
                answer = temp_sum
        return answer
        