# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev, curr = None, slow
        while curr:
            nxt = curr.next
            curr.next = prev
            prev, curr = curr, nxt
        second = prev  # head of reversed second half

        max_sum = 0
        p1, p2 = head, second
        while p2:  # second half length == first half length
            max_sum = max(max_sum, p1.val + p2.val)
            p1 = p1.next
            p2 = p2.next

        return max_sum