class Solution:
    def reverse(self, x: int) -> int:
        MIN_INT = -2**31
        MAX_INT = 2**31 - 1

        MAX_INT_DIV_10 = MAX_INT // 10 # 214748364
        MAX_INT_MOD_10 = MAX_INT % 10 # 7

        sign = 1 if x >= 0 else -1
        abs_x = abs(x)

        reversed_abs = 0
        while abs_x > 0:
            digit = abs_x % 10
            abs_x //= 10

            if reversed_abs > MAX_INT_DIV_10 or (reversed_abs == MAX_INT_DIV_10 and digit > MAX_INT_MOD_10):
                return 0

            reversed_abs = reversed_abs * 10 + digit

        return sign * reversed_abs