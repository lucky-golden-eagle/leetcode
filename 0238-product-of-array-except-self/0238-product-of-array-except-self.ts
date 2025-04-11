function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = new Array(n).fill(1);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and multiply with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return answer;
};