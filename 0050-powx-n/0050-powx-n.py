class Solution:
    def myPow(self, x: float, n: int) -> float:
        def fast_pow(a, b):
            if b == 0:
                return 1
            half = fast_pow(a, b // 2)
            return half * half if b % 2 == 0 else half * half * a

        if n < 0:
            x = 1 / x
            n = -n
        return fast_pow(x, n)