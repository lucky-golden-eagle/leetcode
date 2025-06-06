class Solution:
    def robotWithString(self, s: str) -> str:
        n = len(s)
        min_suf = [''] * n
        min_suf[-1] = s[-1]
        
        for i in range(n - 2, -1, -1):
            min_suf[i] = min(s[i], min_suf[i + 1])
        
        t_stack = []
        paper = []
        for i in range(n):
            t_stack.append(s[i])
            while t_stack and (i == n - 1 or t_stack[-1] <= min_suf[i + 1]):
                paper.append(t_stack.pop())

        while t_stack:
            paper.append(t_stack.pop())
        
        return ''.join(paper)
