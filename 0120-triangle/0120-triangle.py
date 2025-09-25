class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)

        if n == 0:
            return 0
        if n == 1:
            return triangle[0][0]

        dp = list(triangle[n-1])

        for i in range(n - 2, -1, -1):
            for j in range(len(triangle[i])):
                dp[j] = triangle[i][j] + min(dp[j], dp[j+1])
        
        return dp[0]