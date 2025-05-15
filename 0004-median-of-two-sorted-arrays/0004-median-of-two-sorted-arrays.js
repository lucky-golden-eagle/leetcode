/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Swap arrays
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
 
    const halfLength = Math.floor((totalLength + 1) / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        const j = halfLength - i;

        const maxLeft1 = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i - 1];
        const minRight1 = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];

        const maxLeft2 = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j - 1];
        const minRight2 = (j === n) ? Number.POSITIVE_INFINITY : nums2[j];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            const maxLeft = Math.max(maxLeft1, maxLeft2);

            if (totalLength % 2 === 1) {
                return maxLeft;
            } else {
                const minRight = Math.min(minRight1, minRight2);
                return (maxLeft + minRight) / 2.0;
            }
        } else if (maxLeft1 > minRight2) {
            high = i - 1;
        } else { // maxLeft2 > minRight1
            low = i + 1;
        }
    }

    return 0.0; // Or throw an error
};