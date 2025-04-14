class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result = []
        i = 0
        n = len(words)
        while i < n:
            j = i
            current_length = 0
            words_in_line = []
            while j < n:
                word = words[j]
                word_length = len(word)
                if not words_in_line:
                    if current_length + word_length <= maxWidth:
                        words_in_line.append(word)
                        current_length = word_length
                        j += 1
                    else:
                        break
                else:
                    if current_length + 1 + word_length <= maxWidth:
                        words_in_line.append(word)
                        current_length += 1 + word_length
                        j += 1
                    else:
                        break
                        
            end_index = j - 1
            count = len(words_in_line)
            last_line = (end_index == n - 1)
            
            if last_line or count == 1:
                line = " ".join(words_in_line)
                padding_needed = maxWidth - len(line)
                line += " " * padding_needed
            elif count > 1:
                spaces_to_add = maxWidth - sum(len(word) for word in words_in_line)
                gaps = count - 1
                spaces_per_gap = spaces_to_add // gaps
                remainder = spaces_to_add % gaps
                line = ""
                for index in range(count):
                    line += words_in_line[index]
                    if index < count - 1:
                        spaces = spaces_per_gap
                        if index < remainder:
                            spaces += 1
                        line += " " * spaces
                        
            result.append(line)
            i = end_index + 1 if end_index >= i else j
            
        return result