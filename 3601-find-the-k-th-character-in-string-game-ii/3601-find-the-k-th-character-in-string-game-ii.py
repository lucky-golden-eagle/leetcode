class Solution:
    def kthCharacter(self, k: int, operations: List[int]) -> str:
        length = 1
        for op in operations:
            length <<= 1
        shift = 0
        for op in reversed(operations):
            length >>= 1
            if k > length:
                k -= length
                if op == 1:
                    shift += 1
        return chr(97 + shift % 26)