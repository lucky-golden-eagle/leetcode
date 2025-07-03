class Solution:
    def kthCharacter(self, k: int) -> str:
        length = 1
        while length < k:
            length <<= 1
        shift = 0
        while k > 1:
            if k > length >> 1:
                k -= length >> 1
                shift += 1
            length >>= 1
        return chr(((ord('a') - ord('a') + shift) % 26) + ord('a'))