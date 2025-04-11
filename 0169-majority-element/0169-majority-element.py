class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority_candidate = nums[0]
        count = 1
        for i in range(1, len(nums)):
            if count == 0:
                majority_candidate = nums[i]
                count = 1
            elif nums[i] == majority_candidate:
                count += 1
            else:
                count -= 1
                
        return majority_candidate