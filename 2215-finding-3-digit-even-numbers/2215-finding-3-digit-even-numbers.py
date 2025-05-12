class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        count = Counter(digits)
        res = set()

        for i in range(100, 1000):
            a, b, c = i // 100, (i // 10) % 10, i % 10
            if c % 2 != 0:
                continue
            curr = Counter([a, b, c])
            if all(count[d] >= curr[d] for d in curr):
                res.add(i)

        return sorted(res)