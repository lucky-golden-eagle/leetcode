/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let k = 1;
    while (true) {
        let val = (1 << k) - 1;
        if (val >= n) return val;
        k++;
    }
};