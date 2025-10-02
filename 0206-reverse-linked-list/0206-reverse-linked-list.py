# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr:
            next_node = curr.next   # save next node
            curr.next = prev        # reverse pointer
            prev = curr             # move prev forward
            curr = next_node        # move curr forward
        return prev