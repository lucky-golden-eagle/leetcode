/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let full = numBottles;
    let empty = 0;
    let cost = numExchange;
    let drunk = 0;

    while (true) {
        if (full > 0) {
        drunk += full;
        empty += full;
        full = 0;
        }

        // Perform exchanges, note: cost increases after each single exchange
        // so we never do multiple exchanges at the same cost value.
        if (empty >= cost) {
        empty -= cost;
        full += 1;
        cost += 1;
        } else {
        break; // no more exchanges possible and no full bottles left
        }
    }

    return drunk;
};