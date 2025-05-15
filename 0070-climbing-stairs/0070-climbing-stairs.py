class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        num = []
        num.append(1)
        num.append(2)
        
        for i in range(2, n):
            num.append(num[i - 1] + num[i - 2])
            
        return num[n - 1]