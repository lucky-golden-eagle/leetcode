function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
  const n = nums.length;
  let closestSum = Infinity;
  let minDifference = Infinity;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const currentDifference = Math.abs(currentSum - target);

      if (currentDifference < minDifference) {
        minDifference = currentDifference;
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        return currentSum;
      }
    }
  }

  return closestSum;
};