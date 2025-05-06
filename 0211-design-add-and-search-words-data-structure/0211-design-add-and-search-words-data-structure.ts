class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEnd: boolean = false;
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        const dfs = (index: number, node: TrieNode): boolean => {
            if (index === word.length) return node.isEnd;
            const ch = word[index];
            if (ch === '.') {
                for (const child of node.children.values()) {
                    if (dfs(index + 1, child)) return true;
                }
                return false;
            } else {
                if (!node.children.has(ch)) return false;
                return dfs(index + 1, node.children.get(ch)!);
            }
        };

        return dfs(0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */