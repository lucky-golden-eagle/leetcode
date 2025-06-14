class Solution:
    def minMaxDifference(self, num: int) -> int:
        s_num = str(num)
        max_s_num = list(s_num)
        digit_to_remap_for_max = ''
        
        for digit_char in s_num:
            if digit_char != '9':
                digit_to_remap_for_max = digit_char
                break
        
        if digit_to_remap_for_max: # If a non-'9' digit was found
            for i in range(len(max_s_num)):
                if max_s_num[i] == digit_to_remap_for_max:
                    max_s_num[i] = '9'

        max_val = int("".join(max_s_num))

        min_s_num = list(s_num)
        digit_to_remap_for_min = ''
        for digit_char in s_num:
            if digit_char != '0':
                digit_to_remap_for_min = digit_char
                break

        if digit_to_remap_for_min:
            target_min_digit = '0'

            for i in range(len(min_s_num)):
                if min_s_num[i] == digit_to_remap_for_min:
                    min_s_num[i] = target_min_digit
        
        min_val = int("".join(min_s_num))

        return max_val - min_val

