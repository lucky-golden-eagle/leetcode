class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n = len(s)
        m = len(p)
        
        # Create DP table: dp[i][j] is True if first i chars of s 
        # match first j chars of p
        dp = [[False] * (m + 1) for _ in range(n + 1)]
        
        # Base case: Empty string matches empty pattern
        dp[0][0] = True
        
        # Base case: Empty string vs pattern (only '*' can match empty string)
        for j in range(1, m + 1):
            if p[j-1] == '*':
                # '*' matches empty sequence, depends on previous pattern state
                dp[0][j] = dp[0][j-1]
            # Otherwise dp[0][j] remains False
                
        # Fill the DP table
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                pattern_char = p[j-1]
                string_char = s[i-1]
                
                if pattern_char.islower():
                    # Match only if characters are same and previous state matched
                    if string_char == pattern_char:
                        dp[i][j] = dp[i-1][j-1]
                    # No else needed, defaults to False
                        
                elif pattern_char == '?':
                    # '?' matches any single character, depends on previous state
                    dp[i][j] = dp[i-1][j-1]
                    
                elif pattern_char == '*':
                    # '*' can match empty sequence (dp[i][j-1]) OR
                    # '*' can match the current char s[i-1] (dp[i-1][j])
                    dp[i][j] = dp[i][j-1] or dp[i-1][j]
                    
        # Result is the state for the entire string and pattern
        return dp[n][m]