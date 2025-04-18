function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === '+') {
            const operand2 = stack.pop()!;
            const operand1 = stack.pop()!;
            stack.push(operand1 + operand2);
        } else if (token === '-') {
            const operand2 = stack.pop()!;
            const operand1 = stack.pop()!;
            stack.push(operand1 - operand2);
        } else if (token === '*') {
            const operand2 = stack.pop()!;
            const operand1 = stack.pop()!;
            stack.push(operand1 * operand2);
        } else if (token === '/') {
            const operand2 = stack.pop()!;
            const operand1 = stack.pop()!;
            // Integer division truncates towards zero
            stack.push(Math.trunc(operand1 / operand2));
        } else {
            // Token is an operand (number)
            stack.push(parseInt(token));
        }
    }

    return stack.pop()!;
};