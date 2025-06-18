class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        count = Counter(nums)
        res = []
        i = 0
        while i < len(nums):
            if count[nums[i]] == 0:
                i += 1
                continue
            group = []
            for j in range(i, len(nums)):
                if count[nums[j]] and (not group or nums[j] - group[0] <= k):
                    group.append(nums[j])
                    count[nums[j]] -= 1
                    if len(group) == 3:
                        break
            if len(group) != 3:
                return []
            res.append(group)
        return res