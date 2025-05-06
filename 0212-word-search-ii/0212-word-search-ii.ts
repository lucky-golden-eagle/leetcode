class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: string | null = null;
}

function findWords(board: string[][], words: string[]): string[] {
    const root = new TrieNode();

    for (const word of words) {
        let node = root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)!;
        }
        node.word = word;
    }

    const res: string[] = [];
    const m = board.length, n = board[0].length;

    const dfs = (i: number, j: number, node: TrieNode) => {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '#') return;
        const ch = board[i][j];
        if (!node.children.has(ch)) return;

        const next = node.children.get(ch)!;
        if (next.word !== null) {
            res.push(next.word);
            next.word = null;
        }

        board[i][j] = '#';
        dfs(i + 1, j, next);
        dfs(i - 1, j, next);
        dfs(i, j + 1, next);
        dfs(i, j - 1, next);
        board[i][j] = ch;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return res;
}