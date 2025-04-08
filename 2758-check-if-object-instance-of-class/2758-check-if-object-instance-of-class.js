/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (
        classFunction === null ||
        typeof classFunction !== 'function' ||
        !classFunction.prototype ||
        obj === null ||           
        typeof obj === 'undefined'
       ) {
        return false;
    }

    let currentProto = Object.getPrototypeOf(Object(obj));

    while (currentProto !== null) {
        if (currentProto === classFunction.prototype) {
            return true;
        }
        currentProto = Object.getPrototypeOf(currentProto);
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */