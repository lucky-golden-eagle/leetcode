function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const res: number[][] = []
    const heap: [number, number, number][] = []

    const push = (sum: number, i: number, j: number) => {
        heap.push([sum, i, j])
        let idx = heap.length - 1
        while (idx > 0) {
            const p = Math.floor((idx - 1) / 2)
            if (heap[p][0] <= heap[idx][0]) break
            ;[heap[p], heap[idx]] = [heap[idx], heap[p]]
            idx = p
        }
    }

    const pop = (): [number, number, number] => {
        const top = heap[0]
        heap[0] = heap[heap.length - 1]
        heap.pop()
        let i = 0, n = heap.length
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i
            if (l < n && heap[l][0] < heap[smallest][0]) smallest = l
            if (r < n && heap[r][0] < heap[smallest][0]) smallest = r
            if (smallest === i) break
            ;[heap[i], heap[smallest]] = [heap[smallest], heap[i]]
            i = smallest
        }
        return top
    }

    const n1 = nums1.length, n2 = nums2.length
    for (let i = 0; i < Math.min(k, n1); i++) {
        push(nums1[i] + nums2[0], i, 0)
    }

    while (res.length < k && heap.length > 0) {
        const [_, i, j] = pop()
        res.push([nums1[i], nums2[j]])
        if (j + 1 < n2) {
            push(nums1[i] + nums2[j + 1], i, j + 1)
        }
    }

    return res
};