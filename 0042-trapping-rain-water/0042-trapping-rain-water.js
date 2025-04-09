/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length === 0) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }

    return totalWater;
};