/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const n = nums.length;
    const GCD = (a, b) => a%b===0 ? b : GCD(b, a%b);
    const LCM = (a, b) => a*b / GCD(a,b);
    const stack = [];

    for(let num of nums){
        stack.push(num);

        while( stack.length>1 && GCD(stack.at(-2), stack.at(-1))>1 ){
            const lcm = LCM(stack.at(-2), stack.at(-1));
            stack.pop();
            stack.pop();
            stack.push(lcm);
        }
    }
    
    return stack;
};