/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    const m = languages.length;

    // Convert each user's known languages into a Set for quick lookup
    const langSets = languages.map(l => new Set(l));

    // Collect friendships where communication is impossible
    const needTeach = [];
    for (let [u, v] of friendships) {
        u--; v--;
        let canCommunicate = false;
        for (let lang of langSets[u]) {
            if (langSets[v].has(lang)) {
                canCommunicate = true;
                break;
            }
        }
        if (!canCommunicate) {
            needTeach.push([u, v]);
        }
    }

    if (needTeach.length === 0) return 0;

    // Count how many users would need to learn each language
    let minTeach = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        let teachSet = new Set();
        for (let [u, v] of needTeach) {
            if (!langSets[u].has(lang)) teachSet.add(u);
            if (!langSets[v].has(lang)) teachSet.add(v);
        }
        minTeach = Math.min(minTeach, teachSet.size);
    }

    return minTeach;
};