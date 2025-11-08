class Solution:
    def minimumOneBitOperations(self, n: int) -> int:
        for k in (1,2,4,8,16): n ^= n >> k
        
        return n