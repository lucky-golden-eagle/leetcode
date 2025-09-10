class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31

        if dividend == INT_MIN and divisor == -1:
            return INT_MAX

        a = abs(dividend)
        b = abs(divisor)
        result = 0

        while a >= b:
            temp = b
            multiple = 1
            while a >= (temp << 1):
                temp <<= 1
                multiple <<= 1
            a -= temp
            result += multiple

        return result if (dividend > 0) == (divisor > 0) else -result