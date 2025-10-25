class Solution:
    def totalMoney(self, n: int) -> int:
        w, r = divmod(n, 7)
        return 7 * w * (w + 7) // 2 + r * (w + 1) + r * (r - 1) // 2