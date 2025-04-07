/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(false));

    dp[0][0] = true;
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
             if (j >= 2) {
                dp[0][j] = dp[0][j - 2];
             }
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const sChar = s[i - 1];
            const pChar = p[j - 1];

            if (pChar !== '*') {
                if (dp[i - 1][j - 1] && (sChar === pChar || pChar === '.')) {
                    dp[i][j] = true;
                }
            } else {
                 const prevPChar = p[j - 2];
                 const matchesZero = dp[i][j - 2];
                 let matchesOneOrMore = false;
                 if (sChar === prevPChar || prevPChar === '.') {
                     if (dp[i - 1][j]) { // Check condition b2
                         matchesOneOrMore = true;
                     }
                 }

                 dp[i][j] = matchesZero || matchesOneOrMore;
            }
        }
    }

    return dp[m][n];
};