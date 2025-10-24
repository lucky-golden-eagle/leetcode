class Solution:
    def generate(self, n: int, current: int, remaining: int, count: list[int]) -> int:
        if remaining == 0:
            if current > n and all(c == 0 or c == i for i, c in enumerate(count)):
                return current
            return 0

        result = 0
        for d in range(1, 10):
            if result == 0 and count[d] < d and d - count[d] <= remaining:
                count[d] += 1
                result = self.generate(n, current * 10 + d, remaining - 1, count)
                count[d] -= 1
        return result

    def nextBeautifulNumber(self, n: int) -> int:
        length = len(str(n))
        count = [0] * 10

        result = self.generate(n, 0, length, count)
        count = [0] * 10
        next_len_result = self.generate(0, 0, length + 1, count)
        if result == 0:
            result = next_len_result
        return result
        