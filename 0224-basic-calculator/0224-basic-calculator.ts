function calculate(s: string): number {
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative
    const stack: [number, number][] = []; // Stores [previous result, previous sign] when encountering '('
    let i = 0;

    while (i < s.length) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            let num = 0;
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0));
                i++;
            }
            result += sign * num;
            continue;
        } else if (char === '+') {
            sign = 1;
        } else if (char === '-') {
            sign = -1;
        } else if (char === '(') {
            stack.push([result, sign]);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            const [prevResult, prevSign] = stack.pop()!;
            result = prevResult + prevSign * result;
        } else if (char === ' ') {
            // Ignore spaces
        }

        i++; // Move to the next character in the outer loop
    }

    return result;
};