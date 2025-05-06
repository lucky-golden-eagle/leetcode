class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n):
            nums[i] += (nums[nums[i]] % n) * n
        for i in range(n):
            nums[i] //= n
        return nums