function myAtoi(s: string): number {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    const MAX_INT_DIV_10 = Math.floor(MAX_INT / 10);
    const MAX_INT_MOD_10 = MAX_INT % 10;

    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    while (i < n && s[i] === ' ') {
        i++;
    }

    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        if (result > MAX_INT_DIV_10 || (result === MAX_INT_DIV_10 && digit > MAX_INT_MOD_10)) {
            return sign === 1 ? MAX_INT : MIN_INT;
        }

        result = result * 10 + digit;
        i++;
    }

    return sign * result;
};