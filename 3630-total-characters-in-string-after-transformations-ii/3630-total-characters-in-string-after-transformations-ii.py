MOD = 10**9 + 7

class Solution:
    def lengthAfterTransformations(self, s: str, t: int, nums: List[int]) -> int:
        cnt = [0] * 26
        for ch in s:
            cnt[ord(ch) - ord('a')] += 1

        mat = [[0] * 26 for _ in range(26)]
        for i in range(26):
            for j in range(nums[i]):
                mat[i][(i + j + 1) % 26] += 1

        def mat_mult(a, b):
            res = [[0] * 26 for _ in range(26)]
            for i in range(26):
                for j in range(26):
                    for k in range(26):
                        res[i][j] = (res[i][j] + a[i][k] * b[k][j]) % MOD
            return res

        def mat_pow(mat, power):
            res = [[int(i == j) for j in range(26)] for i in range(26)]
            while power:
                if power % 2:
                    res = mat_mult(res, mat)
                mat = mat_mult(mat, mat)
                power //= 2
            return res

        mat = mat_pow(mat, t)

        res_len = 0
        for i in range(26):
            for j in range(26):
                res_len = (res_len + cnt[i] * mat[i][j]) % MOD

        return res_len