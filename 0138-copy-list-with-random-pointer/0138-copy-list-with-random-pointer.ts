/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) {
        return null;
    }

    let currentNode: Node | null = head;
    while (currentNode !== null) {
        const newNode = new Node(currentNode.val);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        currentNode = newNode.next;
    }

    // Pass 2: Set random pointers of the copied nodes
    currentNode = head;
    while (currentNode !== null) {
        const copiedNode = currentNode.next!;
        if (currentNode.random !== null) {
            copiedNode.random = currentNode.random.next!;
        } else {
            copiedNode.random = null;
        }
        currentNode = copiedNode.next; // Move to the next original node
    }

    // Pass 3: Separate the original and copied lists
    const copiedHead = head.next;
    currentNode = head;
    while (currentNode !== null) {
        const copiedNode = currentNode.next!;
        currentNode.next = copiedNode.next; // Restore original next
        if (copiedNode.next !== null) {
            copiedNode.next = copiedNode.next.next!; // Link copied to next copied
        }
    
        currentNode = currentNode.next; // Move to the next original node
    }

    return copiedHead;
};