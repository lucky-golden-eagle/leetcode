function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue: [string, number][] = [[beginWord, 1]];
    const visited = new Set<string>();
    visited.add(beginWord);

    while (queue.length) {
        const [word, length] = queue.shift()!;
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const ch = String.fromCharCode(c);
                if (ch === word[i]) continue;
                const nextWord = word.slice(0, i) + ch + word.slice(i + 1);
                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, length + 1]);
                }
            }
        }
    }

    return 0;
};