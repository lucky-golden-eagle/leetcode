function isPalindrome(s: string): boolean {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i++] !== s[j--]) return false;
    }
    return true;
}

function toBaseK(num: number, k: number): string {
    let res = '';
    while (num > 0) {
        res = (num % k) + res;
        num = Math.floor(num / k);
    }
    return res || '0';
}

function kMirror(k: number, n: number): number {
    let sum = 0, count = 0;

    const genPalindromes = function*(len: number) {
        const half = Math.floor((len + 1) / 2);
        const start = len === 1 ? 1 : Math.pow(10, half - 1);
        const end = Math.pow(10, half);
        for (let i = start; i < end; i++) {
            let left = i.toString();
            let right = left.split('').reverse().join('');
            if (len % 2 === 1) right = right.slice(1);
            yield parseInt(left + right);
        }
    }

    let length = 1;
    while (count < n) {
        for (const p of genPalindromes(length)) {
            if (isPalindrome(toBaseK(p, k))) {
                sum += p;
                count++;
                if (count === n) return sum;
            }
        }
        length++;
    }
    return sum;
}