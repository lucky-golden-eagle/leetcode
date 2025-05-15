class Solution:
    def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        n = len(words)
        dp = [[0, []] for _ in range(n)]
        for i in range(n):
            dp[i] = [1, [words[i]]]
            for j in range(i):
                if groups[i] != groups[j] and dp[j][0] + 1 > dp[i][0]:
                    dp[i] = [dp[j][0] + 1, dp[j][1] + [words[i]]]
        return max(dp, key=lambda x: x[0])[1]






