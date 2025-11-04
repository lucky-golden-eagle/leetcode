class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        i = 0
        ans = []
        while i + k <= len(nums):
            dic = {}
            
            # Count frequency of each number
            for j in range(i, i + k):
                if nums[j] not in dic:
                    dic[nums[j]] = 1
                else:
                    dic[nums[j]] += 1
            
            # Sort by frequency desc, then value desc
            sorted_dic = sorted(dic.items(), key=lambda n: (-n[1], -n[0]))
            
            # Take top x items and compute x-sum
            total = 0
            for val, freq in sorted_dic[:x]:
                total += val * freq
            
            ans.append(total)
            i += 1
        return ans