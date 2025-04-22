/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    // Find the length and the tail
    let size = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        size++;
    }

    // Make it a circular list
    tail.next = head;

    // Find the new tail: (size - k % size - 1)th node
    k = k % size;
    let stepsToNewTail = size - k - 1;
    let newTail = head;
    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next!;
    }

    // The new head is next of newTail
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};