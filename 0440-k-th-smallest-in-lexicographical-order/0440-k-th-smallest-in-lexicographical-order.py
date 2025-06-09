class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        curr = 1
        while k>1:
            counts = self.get_prefix(n,curr,curr+1)
            if 1+counts<=k:
                curr = curr+1
                k-=counts
            else:
                k-=1
                curr = curr*10
        return curr

    def get_prefix(self,n,n1,n2):
        steps = 0
        while n1<=n:
            steps+=min(n+1,n2)-n1
            n1*=10
            n2*=10
        return steps