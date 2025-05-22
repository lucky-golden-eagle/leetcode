class Solution:
    def maxRemoval(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        used_query = []  # Min-heap (stores end points)
        available_query = []  # Max-heap (stores end points, using negative values)
        
        # Sort queries by start point
        queries.sort(key=lambda x: x[0])
        
        query_pos = 0
        applied_count = 0
        
        for i in range(n):
            # Push all queries starting at `i` into available_query (as a max-heap)
            while query_pos < len(queries) and queries[query_pos][0] == i:
                end = queries[query_pos][1]
                heapq.heappush(available_query, -end)  # Using negative for max-heap
                query_pos += 1
            
            # Adjust nums[i] by subtracting the number of active queries covering it
            nums[i] -= len(used_query)
            
            # Apply queries if nums[i] > 0
            while nums[i] > 0 and available_query and -available_query[0] >= i:
                end = -heapq.heappop(available_query)
                heapq.heappush(used_query, end)
                nums[i] -= 1
                applied_count += 1
            
            # If nums[i] couldn't be reduced to zero
            if nums[i] > 0:
                return -1
            
            # Remove queries that end at `i` from used_query
            while used_query and used_query[0] == i:
                heapq.heappop(used_query)
        
        return len(queries) - applied_count