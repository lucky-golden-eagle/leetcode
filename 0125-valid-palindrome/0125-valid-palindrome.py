class Solution:
    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True
        new_string = ''.join(char.lower() for char in s if char.isalpha() or char.isdigit())
        
        reverse_string = new_string[::-1]
        
        return new_string == reverse_string