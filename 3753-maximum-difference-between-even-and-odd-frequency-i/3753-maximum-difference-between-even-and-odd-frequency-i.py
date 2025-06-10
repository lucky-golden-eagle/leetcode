class Solution:
    def maxDifference(self, s: str) -> int:
        freq = Counter(s)

        odd_freqs = [count for count in freq.values() if count % 2 == 1]
        even_freqs = [count for count in freq.values() if count % 2 == 0]

        if not odd_freqs or not even_freqs:
            return 0  # per problem constraints this won't happen

        return max(odd_freqs) - min(even_freqs)
