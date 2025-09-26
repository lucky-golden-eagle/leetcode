class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        if set(word1) == set(word2):
            cnt1, cnt2 = Counter(word1), Counter(word2)
            return True if sorted(cnt1.values()) == sorted(cnt2.values()) else False
        return False