class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def heapify(arr, n, i):
            largest = i
            l = 2 * i + 1
            r = 2 * i + 2
            if l < n and arr[l] > arr[largest]:
                largest = l
            if r < n and arr[r] > arr[largest]:
                largest = r
            if largest != i:
                arr[i], arr[largest] = arr[largest], arr[i]
                heapify(arr, n, largest)

        n = len(nums)
        for i in range(n // 2 - 1, -1, -1):
            heapify(nums, n, i)

        for i in range(n - 1, n - k, -1):
            nums[0], nums[i] = nums[i], nums[0]
            heapify(nums, i, 0)

        return nums[0]