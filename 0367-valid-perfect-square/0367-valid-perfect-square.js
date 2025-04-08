/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 1;
    let high = num;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let square = mid * mid;

        if (square === num) {
            return true;
        } else if (square < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};