class Solution:
    def compress(self, chars: List[str]) -> int:
        write = anchor = 0
        for read in range(len(chars)):
            if read + 1 == len(chars) or chars[read] != chars[read + 1]:
                chars[write] = chars[anchor]
                write += 1
                if read > anchor:
                    for c in str(read - anchor + 1):
                        chars[write] = c
                        write += 1
                anchor = read + 1
        return write