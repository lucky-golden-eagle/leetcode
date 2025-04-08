# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        min_heap = []
        
        for i, node in enumerate(lists):
            if node:
                # Store (value, unique_id, node) in heap
                # unique_id (list index i) handles comparisons if values are equal
                heapq.heappush(min_heap, (node.val, i, node))
                
        dummy = ListNode()
        current = dummy
        
        while min_heap:
            val, i, smallest_node = heapq.heappop(min_heap)
            
            current.next = smallest_node
            current = current.next
            
            if smallest_node.next:
                next_node = smallest_node.next
                # Use the same unique_id 'i' for the next node from the same list
                heapq.heappush(min_heap, (next_node.val, i, next_node))
                
        return dummy.next