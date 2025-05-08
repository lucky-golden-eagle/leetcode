class MedianFinder:

    def __init__(self):
        self.low = []   # max-heap
        self.high = []  # min-heap

    def addNum(self, num: int) -> None:
        self._heappush(self.low, -num)
        self._heappush(self.high, -self._heappop(self.low))
        if len(self.low) < len(self.high):
            self._heappush(self.low, -self._heappop(self.high))

    def findMedian(self) -> float:
        if len(self.low) > len(self.high):
            return -self.low[0]
        return (-self.low[0] + self.high[0]) / 2

    def _heappush(self, heap, val):
        heap.append(val)
        i = len(heap) - 1
        while i > 0:
            p = (i - 1) // 2
            if heap[p] <= heap[i]:
                break
            heap[p], heap[i] = heap[i], heap[p]
            i = p

    def _heappop(self, heap):
        top = heap[0]
        heap[0] = heap[-1]
        heap.pop()
        i = 0
        while True:
            l, r = 2 * i + 1, 2 * i + 2
            smallest = i
            if l < len(heap) and heap[l] < heap[smallest]:
                smallest = l
            if r < len(heap) and heap[r] < heap[smallest]:
                smallest = r
            if smallest == i:
                break
            heap[i], heap[smallest] = heap[smallest], heap[i]
            i = smallest
        return top
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()