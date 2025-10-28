/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function(m, k, nums) {
    const MOD = 1000000007n; // Use BigInt for the modulus
    const n = nums.length;

    // Precompute powers of nums[i] modulo MOD, storing as BigInt
    const powNum = Array(n).fill(0).map(() => Array(m + 1).fill(1n));
    for (let i = 0; i < n; i++) {
        const base = BigInt(nums[i]);
        for (let j = 1; j <= m; j++) {
            powNum[i][j] = (powNum[i][j - 1] * base) % MOD;
        }
    }

    // Precompute combinations (Pascal's Triangle) modulo MOD, storing as BigInt
    const C = Array(m + 1).fill(0).map(() => Array(m + 1).fill(0n));
    for (let i = 0; i <= m; i++) {
        C[i][0] = 1n;
        for (let j = 1; j <= i; j++) {
            C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
        }
    }

    // Memoization table
    const memo = new Map();

    // Helper to count set bits in a standard Number
    const countSetBits = (num) => {
        let count = 0;
        while (num > 0) {
            count += (num & 1);
            num >>= 1;
        }
        return count;
    };

    const dfs = (pos, carry, used, k_rem) => {
        // If we need more set bits than possible, or already have too many, prune the search
        if (k_rem < 0) {
            return 0n;
        }
        
        // Base case: we have processed all numbers
        if (pos === n) {
            // Check if we used exactly m elements and the remaining bits in the carry match k_rem
            if (used === m && countSetBits(carry) === k_rem) {
                return 1n; // Represents one valid combination of counts
            }
            return 0n;
        }

        // Create a unique key for the current state for memoization
        const key = `${pos},${carry},${used},${k_rem}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let ans = 0n;
        
        // Iterate on the count of the current number nums[pos]
        for (let cnt = 0; cnt <= m - used; cnt++) {
            const total = carry + cnt;
            const currentBit = total & 1;
            const nextCarry = total >> 1;
            
            const subResult = dfs(pos + 1, nextCarry, used + cnt, k_rem - currentBit);

            // If the subproblem has valid solutions, calculate their contribution
            if (subResult > 0n) {
                const ways = C[m - used][cnt];
                const prod = powNum[pos][cnt];
                
                // Perform all multiplications with BigInt to prevent overflow
                let term = (subResult * ways) % MOD;
                term = (term * prod) % MOD;
                ans = (ans + term) % MOD;
            }
        }

        memo.set(key, ans);
        return ans;
    };

    const finalResult = dfs(0, 0, 0, k);
    
    // LeetCode expects a Number as the final return type
    return Number(finalResult);
};