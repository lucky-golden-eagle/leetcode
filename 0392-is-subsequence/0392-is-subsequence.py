class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)

    def isSubsequence_followup(self, s: str, t: str) -> bool:
        char_indices = {}
        for index, char in enumerate(t):
            if char not in char_indices:
                char_indices[char] = []
            char_indices[char].append(index)

        current_index = -1
        for char_s in s:
            if char_s not in char_indices:
                return False

            found = False
            for index_t in char_indices[char_s]:
                if index_t > current_index:
                    current_index = index_t
                    found = True
                    break
            if not found:
                return False

        return True
        