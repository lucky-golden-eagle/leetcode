/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the shorter array for efficiency
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Swap arrays
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    // Calculate the desired number of elements in the combined left partition
    // This handles both odd and even total lengths correctly.
    // If totalLength is odd (e.g., 5), halfLength = 3. The median is the 3rd element (index 2).
    // If totalLength is even (e.g., 6), halfLength = 3. The median is avg of 3rd (idx 2) and 4th (idx 3) elements.
    const halfLength = Math.floor((totalLength + 1) / 2);

    let low = 0;
    let high = m; // Binary search range for partition in nums1: [0, m]

    while (low <= high) {
        // Calculate partition point 'i' for nums1
        const i = Math.floor((low + high) / 2);
        // Calculate corresponding partition point 'j' for nums2
        const j = halfLength - i;

        // Get the boundary elements around the partitions
        // Use -Infinity/Infinity for elements outside the array bounds
        const maxLeft1 = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i - 1];
        const minRight1 = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];

        const maxLeft2 = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j - 1];
        const minRight2 = (j === n) ? Number.POSITIVE_INFINITY : nums2[j];

        // Check if we found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Correct partition found! Calculate the median.
            const maxLeft = Math.max(maxLeft1, maxLeft2);

            if (totalLength % 2 === 1) {
                // Odd total length: median is the maximum of the left partitions
                return maxLeft;
            } else {
                // Even total length: median is the average of the max of left
                // and the min of right partitions
                const minRight = Math.min(minRight1, minRight2);
                return (maxLeft + minRight) / 2.0;
            }
        } else if (maxLeft1 > minRight2) {
            // Partition 'i' in nums1 is too large. Need to decrease 'i'.
            // Move the partition in nums1 to the left.
            high = i - 1;
        } else { // maxLeft2 > minRight1
            // Partition 'i' in nums1 is too small. Need to increase 'i'.
            // Move the partition in nums1 to the right.
            low = i + 1;
        }
    }

    // Should not be reached if inputs are valid sorted arrays
    // but added for robustness or if constraints were different.
    return 0.0; // Or throw an error
};