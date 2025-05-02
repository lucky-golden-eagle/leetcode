class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        s = 'L' + dominoes + 'R'
        res = []
        i = 0
        for j in range(1, len(s)):
            if s[j] == '.':
                continue
            middle = j - i - 1
            res.append(s[i])
            if s[i] == s[j]:
                res.append(s[i] * middle)
            elif s[i] == 'L' and s[j] == 'R':
                res.append('.' * middle)
            else:
                res.append('R' * (middle // 2) + '.' * (middle % 2) + 'L' * (middle // 2))
            i = j
        res.append(s[-1])
        return ''.join(res)[1:-1]