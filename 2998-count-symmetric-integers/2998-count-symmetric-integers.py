class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        count = 0
        for i in range(1, 10):
            num = 11 * i
            if low <= num <= high:
                count += 1
                
        for d1 in range(1, 10):
            for d2 in range(0, 10):
                sum_first_half = d1 + d2
                for d3 in range(0, 10):
                    d4 = sum_first_half - d3
                    if 0 <= d4 <= 9:
                        num = d1 * 1000 + d2 * 100 + d3 * 10 + d4
                        if low <= num <= high:
                            count += 1
                            
        return count