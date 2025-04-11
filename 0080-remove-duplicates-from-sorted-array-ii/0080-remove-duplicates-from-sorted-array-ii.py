class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        write_index = 0
        count = 0
        
        for read_index in range(len(nums)):
            if read_index > 0 and nums[read_index] == nums[read_index - 1]:
                count += 1
            else:
                count = 1
                
            if count <= 2:
                nums[write_index] = nums[read_index]
                write_index += 1
                
        return write_index