class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        projects = sorted(zip(capital, profits))
        
        def push(heap, val):
            heap.append(val)
            i = len(heap) - 1
            while i > 0:
                p = (i - 1) // 2
                if heap[p] >= heap[i]:
                    break
                heap[p], heap[i] = heap[i], heap[p]
                i = p

        def pop(heap):
            if not heap:
                return None
            heap[0], heap[-1] = heap[-1], heap[0]
            max_val = heap.pop()
            i, n = 0, len(heap)
            while True:
                l, r = 2 * i + 1, 2 * i + 2
                largest = i
                if l < n and heap[l] > heap[largest]:
                    largest = l
                if r < n and heap[r] > heap[largest]:
                    largest = r
                if largest == i:
                    break
                heap[i], heap[largest] = heap[largest], heap[i]
                i = largest
            return max_val

        i = 0
        max_heap = []
        for _ in range(k):
            while i < n and projects[i][0] <= w:
                push(max_heap, projects[i][1])
                i += 1
            if not max_heap:
                break
            w += pop(max_heap)
        return w