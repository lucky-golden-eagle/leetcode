class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int) -> int:
        nums.sort()
        count = defaultdict(int)
        for i in nums: count[i] +=1 
            
        def maxFreq(target):
            left = bisect_left(nums, target-k)
            right = bisect_left(nums, target+k+1)
            options = right-left-count[target]
            return min(options, numOperations) + count[target]

        ans = 0
        for i in range(1,max(nums)+1):
            ans = max(ans, maxFreq(i))
        return ans