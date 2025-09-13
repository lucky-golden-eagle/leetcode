class Solution:
    def maxFreqSum(self, s: str) -> int:
        l=[]
        l1=[]
        for i in s:
            if i in 'aeiou':
                l.append(i)
            if i not in 'aeiou':
                 l1.append(i)
        
        c=Counter(l)
        c1=Counter(l1)
        max1=max(c.values()) if c else 0
        max2=max(c1.values()) if c1 else 0
        return max1+max2