class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return "1"
        prev_term = self.countAndSay(n - 1)
        result = []
        i = 0
        while i < len(prev_term):
            count = 1
            while i + 1 < len(prev_term) and prev_term[i] == prev_term[i + 1]:
                count += 1
                i += 1
            result.append(str(count))
            result.append(prev_term[i])
            i += 1
        return "".join(result)