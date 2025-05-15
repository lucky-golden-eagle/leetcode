class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for i in range(m, len(nums1)):
            nums1.pop()
        
        for num in nums2:
            nums1.append(num)
        nums1.sort()
        
        return nums1