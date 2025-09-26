class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 3:
            return 0
        
        nums.sort()  # Sort the array in non-decreasing order
        
        count = 0
        
        # Iterate from the largest potential side 'c'
        # 'k' is the index of the largest side
        for k in range(n - 1, 1, -1): # k goes from n-1 down to 2
            c = nums[k]
            
            # Use two pointers for sides 'a' and 'b' from the elements to the left of 'c'
            left = 0
            right = k - 1
            
            while left < right:
                a = nums[left]
                b = nums[right]
                
                if a + b > c:
                    # If nums[left] + nums[right] > nums[k], then any element
                    # between nums[left] and nums[right-1] (inclusive)
                    # when paired with nums[right] and nums[k] will also form a triangle.
                    # This is because elements are sorted, so nums[left] <= nums[left+1] <= ... <= nums[right-1].
                    # There are (right - left) such elements.
                    count += (right - left)
                    right -= 1  # Try a smaller 'b' to find more combinations
                else:
                    # If nums[left] + nums[right] <= nums[k], then nums[left] is too small.
                    # Increment 'left' to try a larger 'a'.
                    left += 1
                    
        return count