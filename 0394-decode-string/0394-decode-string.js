/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let currStr = "";            // current working string
    let currNum = 0;             // current repeat count being read
    const strStack = [];         // stack of strings (before '[')
    const countStack = [];       // stack of repeat counts

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            currNum = currNum * 10 + (ch.charCodeAt(0) - 48);
        } else if (ch === '[') {
            strStack.push(currStr);
            countStack.push(currNum);
            currStr = "";
            currNum = 0;
        } else if (ch === ']') {
            const repeat = countStack.pop();
            const prevStr = strStack.pop();
            currStr = prevStr + currStr.repeat(repeat);
        } else {
            currStr += ch;
        }
    }

    return currStr;
};