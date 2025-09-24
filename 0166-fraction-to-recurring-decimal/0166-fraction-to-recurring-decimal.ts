function fractionToDecimal(numerator: number, denominator: number): string {
    // Handle zero numerator
    if (numerator === 0) return "0";

    let result: string[] = [];

    // Handle sign
    if (Math.sign(numerator) * Math.sign(denominator) < 0) {
        result.push("-");
    }

    // Work with positive values to simplify
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // Integer part
    const integerPart = Math.floor(num / den);
    result.push(integerPart.toString());

    // Remainder after integer division
    let remainder = num % den;
    if (remainder === 0) {
        // No fractional part
        return result.join("");
    }

    // Add decimal point
    result.push(".");

    // Map to store remainder → position in result
    const remainderMap = new Map<number, number>();

    while (remainder !== 0) {
        // If we have seen this remainder before, it's repeating
        if (remainderMap.has(remainder)) {
        const repeatIndex = remainderMap.get(remainder)!;
        result.splice(repeatIndex, 0, "(");
        result.push(")");
        break;
        }

        // Store remainder position
        remainderMap.set(remainder, result.length);

        remainder *= 10;
        const digit = Math.floor(remainder / den);
        result.push(digit.toString());

        remainder %= den;
    }

    return result.join("");
};