class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        n = len(s)
        res = s.count('0')
        val = 0
        power = 1
        for i in range(n - 1, -1, -1):
            if s[i] == '1':
                if power > k:
                    break
                val += power
                if val > k:
                    break
                res += 1
            power <<= 1
        return res